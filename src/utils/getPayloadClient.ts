import payload from "payload";
import config from "@/payload-config/payload.config"; // path to your payload.config.ts

let initialized = false;

export async function getPayloadClient() {
  if (!process.env.PAYLOAD_SECRET) {
    throw new Error("PAYLOAD_SECRET not Found Please Add it to .env");
  } else {
    if (!initialized) {
      await payload.init({
        config,
        secret: process.env.PAYLOAD_SECRET,
      });
      initialized = true;
    }
  }
  return payload;
}
