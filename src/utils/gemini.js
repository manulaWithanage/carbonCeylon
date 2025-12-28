
const API_KEY = import.meta.env.VITE_GEMINI_KEY;

// Text generation endpoint
const GEMINI_TEXT_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-exp:generateContent?key=${API_KEY}`;
// Image editing endpoint - using Gemini 2.0 Flash with image generation capability
const GEMINI_IMAGE_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-exp-image-generation:generateContent?key=${API_KEY}`;

// Helper: Convert image URL to base64
const imageUrlToBase64 = async (imageUrl) => {
    try {
        const response = await fetch(imageUrl);
        const blob = await response.blob();
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onloadend = () => {
                const base64String = reader.result.split(',')[1]; // Remove data:image/...;base64, prefix
                resolve(base64String);
            };
            reader.onerror = reject;
            reader.readAsDataURL(blob);
        });
    } catch (error) {
        console.error("Failed to convert image to base64:", error);
        return null;
    }
};

export const generateJewelryDescription = async (config) => {
    if (!API_KEY) {
        console.warn("Missing VITE_GEMINI_KEY");
        return "Error: API Key not configured.";
    }

    const gemstone = config.selectedGemstone || {};
    const gemColor = gemstone.color || 'Blue';
    const gemClarity = gemstone.clarity || 'VVS';
    const gemTreatment = gemstone.treatment || 'Unheated';
    const gemCarat = config.carat || gemstone.carat || 1.5;

    const prompt = `
    You are an expert gemologist and master jeweler at Carbon Ceylon. 
    Analyze this custom jewelry configuration and provide a sophisticated, technical, yet evocative description.
    
    Configuration:
    - Base Model: ${config.jewelryType}
    - Gemstone: ${gemColor} Ceylon Sapphire (${gemTreatment}, ${gemClarity} clarity)
    - Metal: ${config.metal}
    - Cut: ${config.cut}
    - Carat Weight: ${gemCarat} carats

    Please provide a response in the following structured Markdown format (keep it concise, max 150 words total):

    **Your Custom ${gemColor} Sapphire ${config.jewelryType}**

    🌟 **Color Interaction**: [Analyze how the ${gemColor} sapphire pairs with the ${config.metal}. Mention tone and contrast.]
    
    💎 **Cut Dynamics**: [Describe the optical performance of the ${config.cut} cut. Mention brilliance and light return.]
    
    📐 **Visual Scale**: [Comment on the presence of a ${gemCarat} carat stone in this setting. Describe its impact.]
    
    ✨ **Light Performance**: [Predict the light behavior, saturation, and overall "wow" factor.]
  `;

    try {
        const response = await fetch(GEMINI_TEXT_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                contents: [{ parts: [{ text: prompt }] }]
            }),
        });

        if (!response.ok) {
            const errorData = await response.json().catch(() => ({}));
            console.error("Gemini Text API Error:", errorData);
            throw new Error(errorData.error?.message || "Gemini API Error");
        }

        const data = await response.json();
        const text = data.candidates?.[0]?.content?.parts?.[0]?.text;
        return text || "Unable to generate description.";

    } catch (error) {
        console.error("Gemini Text API Request Failed:", error);
        return "Our master jewelers are currently busy. Please try visualizing again in a moment.";
    }
};

export const generateJewelryImage = async (config, baseImageUrl) => {
    if (!API_KEY) return null;

    // First, convert the base jewelry image to base64
    const base64Image = await imageUrlToBase64(baseImageUrl);

    if (!base64Image) {
        console.warn("Could not load base jewelry image for editing");
        return null;
    }

    const gemstone = config.selectedGemstone || {};
    const gemColor = gemstone.color || 'Blue';

    // Create an editing prompt that preserves the jewelry design but changes properties
    const editPrompt = `Edit this jewelry image while PRESERVING the exact jewelry design, shape, and composition.

ONLY change these properties:
- Gemstone COLOR: Change to ${gemColor} Sapphire (keep the same gem shape/position)
- Metal COLOR: Change to ${config.metal} appearance (silver tone for white gold/platinum, yellow for yellow gold, rose for rose gold)
- Gem CUT style: Make it look like a ${config.cut} cut

DO NOT change:
- The overall jewelry design/shape
- The setting style
- The chain or band design
- The composition or camera angle
- The lighting setup

Keep the result photorealistic with professional jewelry lighting.`;

    try {
        const response = await fetch(GEMINI_IMAGE_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                contents: [{
                    parts: [
                        {
                            inlineData: {
                                mimeType: "image/jpeg",
                                data: base64Image
                            }
                        },
                        { text: editPrompt }
                    ]
                }],
                generationConfig: {
                    responseModalities: ["TEXT", "IMAGE"]
                }
            }),
        });

        if (!response.ok) {
            const errorText = await response.text();
            console.warn(`Gemini Image Edit Error (${response.status}):`, errorText);
            return null;
        }

        const data = await response.json();

        // Look for image in response parts
        const parts = data.candidates?.[0]?.content?.parts || [];
        for (const part of parts) {
            if (part.inlineData?.data) {
                const mimeType = part.inlineData.mimeType || "image/png";
                return `data:${mimeType};base64,${part.inlineData.data}`;
            }
        }

        console.warn("No image data in Gemini response:", data);
        return null;

    } catch (error) {
        console.error("Gemini Image Edit Failed:", error);
        return null;
    }
};
