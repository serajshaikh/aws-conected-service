import { S3CreateBucket } from "../src/s3/s3create-bucket";
import { S3UploadObject } from "../src/s3/s3upload-object";
import { SqsConnection } from '../src/sqs/sqs-connection';
import { SnsConnection } from '../src/sns/sns-connection';
import { DynamoDbConnection } from '../src/dynamodb/dynamodb-connection'
import * as fs from 'fs';
import * as path from 'path';
import * as dotenv from 'dotenv';
dotenv.config();


// reading file from UploadMe folder and converting into Object
const newpath = path.join(__dirname, '../src/uploadMe/sampleDemo.json');
const BODY = fs.readFileSync(newpath).toString();
const props = JSON.parse(BODY.toString());
const email: string = props.Email;
const subject: string = props.subject;
const status: number = props.status;
const name = props.Name;

// for extracting SENSITIVE INFO from .env file
const bucketName: any = process.env.BUCKET_NAME;
const queueUrl: any = process.env.QUEUE_URL;
const topicArn: any = process.env.TOPIC_ARN;
const tableName: any = process.env.TABLE_NAME;
const resourceArn: any = process.env.S3_RESOURCE_ARN;


// for creating bucket
/* let cdk= new S3CreateBucket();
cdk.createBucket({Bucket: bucketName}); */

//For S3 bucket, SNS, SQS operation

(async () => {
    let uploadObj = new S3UploadObject(bucketName, "sampleDemo.json", BODY);
    let msgObj = new SqsConnection();
    let snsObj = new SnsConnection();
    const httpResponse = await uploadObj.uploadObjectBucket();
    if (httpResponse === 200) {
        //if httpStatusCode === 200 then only message will be send or remove from sqs queue. message added into the queue when props.status===false otherwise   
        const sqsRes = props.status ? await msgObj.receiveMsg({ queueUrl }) : await msgObj.sendMsg({ email, queueUrl });
        // console.log(sqsRes);

        // sending email to subscribers
        props.status ? snsObj.publish({ state: 1, subject, email, name, topicArn }) : snsObj.publish({ state: 2, subject, email, name, topicArn });

    } else {
        console.log("Oops error!!", httpResponse);
        return httpResponse;
    };

    // creating dynamoDb connection with s3
    let dbObj = new DynamoDbConnection();
    const dbRes = await dbObj.connectS3ToDynamodb('1011', tableName, bucketName, "sampleDemo.json");
    if (dbRes === 200) {
        console.log("HttpResponseCode is: ", dbRes);
        snsObj.publish({ state: 3, subject, email, name, topicArn })

        // getting item from dynamodb
        const getData = await dbObj.getItems("1011", tableName)
        console.log("Response Object is: ", getData);


        // getting content of s3 with the help of dynamodb table 
        const s3Res = await uploadObj.getObjectsFromS3(getData.S3BucketName, getData.BucketKey)
        console.log(s3Res);
        await msgObj.sendMsg({ email, queueUrl });

        snsObj.publish({ state: 4, subject, email, name, topicArn })
    } else {
        console.log("OOps error!!!");
        return dbRes;
    }



})();
