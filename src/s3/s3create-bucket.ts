import { CreateBucketCommand } from "@aws-sdk/client-s3";
import { S3Client } from "@aws-sdk/client-s3";

export class S3CreateBucket {
    REGION: string = "us-east-1";
    s3Client = new S3Client({ region: this.REGION });
    public async createBucket(params: any) {
        try {
            const data = await this.s3Client.send(
                new CreateBucketCommand({ Bucket: params.Bucket })
            );
            console.log(data);
            console.log("Successfully created a bucket called ", data.Location);
            return data;
        } catch (err) {
            console.log("Error", err);
        }
    }
}