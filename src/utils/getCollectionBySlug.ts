import { notFound } from "next/navigation";
import { getPayloadClient } from "./getPayloadClient";
import { CollectionSlug } from "payload";

export async function getCollectionBySlug(
  collectionName: CollectionSlug,
  slug: string
) {
  try {
    const payload = await getPayloadClient();

    const res = await payload.find({
      collection: collectionName,
      where: { slug: { equals: slug } },
    });

    if (res.totalDocs === 0) {
        notFound();
    }

    return res;
  } catch (err: any) {
    throw err;
  }
}
