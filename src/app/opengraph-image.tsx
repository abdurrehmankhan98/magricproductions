import {
  createOgImage,
  ogContentType,
  ogSize,
  ogVariants,
} from "@/lib/ogPreview";

export const alt = "Magric Productions professional podcast and video editing preview";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return createOgImage(ogVariants.home);
}
