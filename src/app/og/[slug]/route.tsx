import {
  createOgImage,
  getOgVariant,
  ogContentType,
} from "@/lib/ogPreview";

export const contentType = ogContentType;

type RouteContext = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return [
    { slug: "home" },
    { slug: "services" },
    { slug: "portfolio" },
    { slug: "process" },
    { slug: "reviews" },
    { slug: "contact" },
  ];
}

export async function GET(_request: Request, context: RouteContext) {
  const { slug } = await context.params;

  return createOgImage(getOgVariant(slug));
}
