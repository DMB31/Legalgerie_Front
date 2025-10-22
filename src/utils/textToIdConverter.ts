import { SerializedHeadingNode } from "@payloadcms/richtext-lexical";

const textToIdConverter = (node: SerializedHeadingNode) => {
  const text = node.children
    ?.map((child: any) => {
      return child.text || "";
    })
    .join("");
  const id = text
    .toLowerCase()
    .replace(/[^\w]+/g, "-")
    .replace(/(^-|-$)/g, "");

    return { id, text }
};

export default textToIdConverter;
