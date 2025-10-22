import { S3Client } from "@aws-sdk/client-s3";
import { env } from "process";

if (
  !env.R2_ACCESS_KEY_ID ||
  !env.R2_SECRET_ACCESS_KEY ||
  !env.R2_ENDPOINT ||
  !env.R2_BUCKET_NAME_LAWS ||
  !env.R2_BUCKET_NAME_DOCUMENTS
) {
  throw new Error("Missing required R2 environment variables");
}

export const r2Client = new S3Client({
  region: env.R2_REGION || "auto",
  endpoint: env.R2_ENDPOINT,
  credentials: {
    accessKeyId: env.R2_ACCESS_KEY_ID,
    secretAccessKey: env.R2_SECRET_ACCESS_KEY,
  },
});

export const R2_BUCKET_NAME_LAWS = env.R2_BUCKET_NAME_LAWS;
export const R2_BUCKET_NAME_DOCUMENTS = env.R2_BUCKET_NAME_DOCUMENTS;
export const R2_LAWS_BUCKET_NAME =
  env.R2_LAWS_BUCKET_NAME || "algerian-laws-fr";
