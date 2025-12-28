import { useState, useCallback } from 'react';
import { Upload, X, Image, Check, AlertCircle, Loader2 } from 'lucide-react';

const ImageUpload = ({ value, onChange, required = false }) => {
    const [isDragging, setIsDragging] = useState(false);
    const [preview, setPreview] = useState(value || null);
    const [isUploading, setIsUploading] = useState(false);
    const [error, setError] = useState(null);
    const [uploadProgress, setUploadProgress] = useState(0);

    // Max file size: 5MB
    const MAX_FILE_SIZE = 5 * 1024 * 1024;
    const ALLOWED_TYPES = ['image/jpeg', 'image/png', 'image/webp'];

    const validateFile = (file) => {
        if (!file) return 'No file selected';
        if (!ALLOWED_TYPES.includes(file.type)) {
            return 'Invalid file type. Only JPG, PNG, and WebP are allowed.';
        }
        if (file.size > MAX_FILE_SIZE) {
            return `File too large. Maximum size is ${MAX_FILE_SIZE / 1024 / 1024}MB.`;
        }
        return null;
    };

    const handleFile = useCallback(async (file) => {
        setError(null);

        const validationError = validateFile(file);
        if (validationError) {
            setError(validationError);
            return;
        }

        // Create preview
        const reader = new FileReader();
        reader.onload = (e) => {
            setPreview(e.target.result);
        };
        reader.readAsDataURL(file);

        // Upload to R2 (or use local preview for now)
        setIsUploading(true);
        setUploadProgress(0);

        try {
            // Simulate upload progress
            const progressInterval = setInterval(() => {
                setUploadProgress(prev => {
                    if (prev >= 90) {
                        clearInterval(progressInterval);
                        return prev;
                    }
                    return prev + 10;
                });
            }, 100);

            // Try to upload to R2 API
            const formData = new FormData();
            formData.append('file', file);

            try {
                const response = await fetch('/api/upload', {
                    method: 'POST',
                    body: formData
                });

                if (response.ok) {
                    const data = await response.json();
                    clearInterval(progressInterval);
                    setUploadProgress(100);
                    onChange(data.url);
                } else {
                    // Fallback: Use data URL for local development
                    clearInterval(progressInterval);
                    setUploadProgress(100);
                    reader.onload = (e) => {
                        onChange(e.target.result);
                    };
                }
            } catch (uploadError) {
                // Fallback for development: use local image path
                clearInterval(progressInterval);
                setUploadProgress(100);

                // For development, create object URL
                const objectUrl = URL.createObjectURL(file);
                onChange(objectUrl);
            }
        } catch (err) {
            setError('Upload failed. Please try again.');
        } finally {
            setIsUploading(false);
        }
    }, [onChange]);

    const handleDrop = useCallback((e) => {
        e.preventDefault();
        setIsDragging(false);

        const file = e.dataTransfer.files[0];
        if (file) {
            handleFile(file);
        }
    }, [handleFile]);

    const handleDragOver = useCallback((e) => {
        e.preventDefault();
        setIsDragging(true);
    }, []);

    const handleDragLeave = useCallback((e) => {
        e.preventDefault();
        setIsDragging(false);
    }, []);

    const handleClick = () => {
        document.getElementById('image-upload-input').click();
    };

    const handleInputChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            handleFile(file);
        }
    };

    const handleRemove = () => {
        setPreview(null);
        onChange('');
        setError(null);
        setUploadProgress(0);
    };

    return (
        <div className="space-y-2">
            <label className="block text-sm text-gray-400 mb-1">
                Product Image {required && <span className="text-red-400">*</span>}
            </label>

            <input
                type="file"
                id="image-upload-input"
                accept=".jpg,.jpeg,.png,.webp"
                onChange={handleInputChange}
                className="hidden"
            />

            {!preview ? (
                <div
                    onClick={handleClick}
                    onDrop={handleDrop}
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    className={`
                        relative border-2 border-dashed rounded-xl p-8 text-center cursor-pointer transition-all
                        ${isDragging
                            ? 'border-[#0d9488] bg-[#0d9488]/10'
                            : 'border-white/20 hover:border-white/40 hover:bg-white/5'
                        }
                        ${error ? 'border-red-500/50 bg-red-500/5' : ''}
                    `}
                >
                    <div className="flex flex-col items-center gap-3">
                        {isUploading ? (
                            <>
                                <Loader2 className="w-10 h-10 text-[#0d9488] animate-spin" />
                                <div className="w-full max-w-xs">
                                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                                        <div
                                            className="h-full bg-[#0d9488] transition-all duration-300"
                                            style={{ width: `${uploadProgress}%` }}
                                        />
                                    </div>
                                    <p className="text-xs text-gray-400 mt-2">Uploading... {uploadProgress}%</p>
                                </div>
                            </>
                        ) : (
                            <>
                                <div className={`p-3 rounded-full ${isDragging ? 'bg-[#0d9488]/20' : 'bg-white/10'}`}>
                                    <Upload className={`w-6 h-6 ${isDragging ? 'text-[#0d9488]' : 'text-gray-400'}`} />
                                </div>
                                <div>
                                    <p className="text-white font-medium">
                                        {isDragging ? 'Drop image here' : 'Click or drag image to upload'}
                                    </p>
                                    <p className="text-xs text-gray-500 mt-1">
                                        JPG, PNG, WebP • Max 5MB
                                    </p>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            ) : (
                <div className="relative group">
                    <div className="relative rounded-xl overflow-hidden border border-white/10">
                        <img
                            src={preview}
                            alt="Preview"
                            className="w-full h-48 object-cover"
                        />
                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
                            <button
                                type="button"
                                onClick={handleClick}
                                className="p-2 bg-white/20 rounded-lg hover:bg-white/30 transition-colors"
                            >
                                <Image className="w-5 h-5 text-white" />
                            </button>
                            <button
                                type="button"
                                onClick={handleRemove}
                                className="p-2 bg-red-500/20 rounded-lg hover:bg-red-500/30 transition-colors"
                            >
                                <X className="w-5 h-5 text-red-400" />
                            </button>
                        </div>
                        {uploadProgress === 100 && (
                            <div className="absolute top-2 right-2 p-1 bg-green-500 rounded-full">
                                <Check className="w-4 h-4 text-white" />
                            </div>
                        )}
                    </div>
                </div>
            )}

            {error && (
                <div className="flex items-center gap-2 text-red-400 text-sm">
                    <AlertCircle className="w-4 h-4" />
                    {error}
                </div>
            )}
        </div>
    );
};

export default ImageUpload;
