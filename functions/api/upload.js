// API endpoint for image upload to R2
// POST /api/upload - Uploads image to R2 storage

export async function onRequestPost(context) {
    const { env, request } = context;

    try {
        const formData = await request.formData();
        const file = formData.get('file');

        if (!file) {
            return new Response(JSON.stringify({ error: 'No file provided' }), {
                status: 400,
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                }
            });
        }

        // Validate file type
        const allowedTypes = ['image/jpeg', 'image/png', 'image/webp'];
        if (!allowedTypes.includes(file.type)) {
            return new Response(JSON.stringify({ error: 'Invalid file type' }), {
                status: 400,
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                }
            });
        }

        // Validate file size (max 5MB)
        const maxSize = 5 * 1024 * 1024;
        if (file.size > maxSize) {
            return new Response(JSON.stringify({ error: 'File too large. Max 5MB.' }), {
                status: 400,
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                }
            });
        }

        // Generate unique filename
        const ext = file.name.split('.').pop();
        const filename = `products/${Date.now()}-${Math.random().toString(36).substring(7)}.${ext}`;

        // Upload to R2
        await env.IMAGES_BUCKET.put(filename, file.stream(), {
            httpMetadata: {
                contentType: file.type
            }
        });

        // Return the public URL
        // Note: You'll need to configure a custom domain or use R2's public URL
        const publicUrl = `/images/${filename}`;

        return new Response(JSON.stringify({
            success: true,
            url: publicUrl,
            filename: filename
        }), {
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            }
        });
    } catch (error) {
        console.error('Upload error:', error);
        return new Response(JSON.stringify({ error: error.message }), {
            status: 500,
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            }
        });
    }
}

export async function onRequestOptions() {
    return new Response(null, {
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'POST, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type'
        }
    });
}
