import { S3Client, PutObjectCommand, GetObjectCommand } from "@aws-sdk/client-s3";
export class S3Service {
    constructor() {
        Object.defineProperty(this, "s3Client", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "bucket", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.s3Client = new S3Client({
            region: import.meta.env.VITE_AWS_REGION,
            credentials: {
                accessKeyId: import.meta.env.VITE_AWS_ACCESS_KEY_ID,
                secretAccessKey: import.meta.env.VITE_AWS_SECRET_ACCESS_KEY,
            }
        });
        this.bucket = import.meta.env.VITE_AWS_S3_BUCKET;
    }
    async uploadFile(file, key) {
        try {
            const command = new PutObjectCommand({
                Bucket: this.bucket,
                Key: key,
                Body: file,
                ContentType: file.type,
                ACL: 'public-read',
            });
            await this.s3Client.send(command);
            return `https://${this.bucket}.s3.${import.meta.env.VITE_AWS_REGION}.amazonaws.com/${key}`;
        }
        catch (error) {
            console.error('Error uploading file:', error);
            throw error;
        }
    }
    async getSignedUrl(key) {
        try {
            const command = new GetObjectCommand({
                Bucket: this.bucket,
                Key: key,
            });
            const url = await this.s3Client.send(command);
            return url.toString();
        }
        catch (error) {
            console.error('Error getting signed URL:', error);
            throw error;
        }
    }
}
export const s3Service = new S3Service();
