import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { s3Service } from '../services/s3Service';
export function ProductUpload() {
    const { isAuthenticated, getToken } = useAuth();
    const [file, setFile] = useState(null);
    const [uploading, setUploading] = useState(false);
    const handleFileChange = (e) => {
        if (e.target.files) {
            setFile(e.target.files[0]);
        }
    };
    const handleUpload = async () => {
        if (!file || !isAuthenticated)
            return;
        try {
            setUploading(true);
            const token = await getToken();
            if (!token)
                throw new Error('No token available');
            const key = `products/${Date.now()}-${file.name}`;
            const url = await s3Service.uploadFile(file, key);
            console.log('File uploaded:', url);
            // Here you can update your product with the new image URL
        }
        catch (error) {
            console.error('Upload error:', error);
        }
        finally {
            setUploading(false);
        }
    };
    return (_jsxs("div", { className: "p-4", children: [_jsx("input", { type: "file", onChange: handleFileChange, className: "mb-4", accept: "image/*" }), _jsx("button", { onClick: handleUpload, disabled: !file || uploading, className: "px-4 py-2 text-white bg-blue-500 rounded disabled:bg-gray-300", children: uploading ? 'Uploading...' : 'Upload' })] }));
}
