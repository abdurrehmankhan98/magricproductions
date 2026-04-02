const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;

function buildCloudinaryUrl(resourceType, publicId, extension, transformations) {
  if (!cloudName || !publicId) {
    return null;
  }

  return `https://res.cloudinary.com/${cloudName}/${resourceType}/upload/${transformations}/${publicId}.${extension}`;
}

function createVideoAsset({ publicId }) {
  const src = buildCloudinaryUrl(
    "video",
    publicId,
    "mp4",
    "f_auto,q_auto:good"
  );

  const poster = buildCloudinaryUrl(
    "video",
    publicId,
    "jpg",
    "so_0,f_jpg,q_auto,w_900"
  );

  return {
    src,
    poster,
  };
}

export const heroBackgroundVideo = createVideoAsset({
  publicId: "magricproductions/hero/video1",
});

export const showcaseClips = [
  {
    title: "Podcast Clip 01",
    textClass: "text-[#ff7a00]",
    cardClass: "bg-[#3d2461]",
    ...createVideoAsset({
      publicId: "magricproductions/showcase/1",
    }),
  },
  {
    title: "Podcast Clip 02",
    textClass: "text-white",
    cardClass: "bg-[#3d2461]",
    ...createVideoAsset({
      publicId: "magricproductions/showcase/2",
    }),
  },
  {
    title: "Podcast Clip 03",
    textClass: "text-[#cf5a23]",
    cardClass: "bg-[#3d2461]",
    ...createVideoAsset({
      publicId: "magricproductions/showcase/3",
    }),
  },
  {
    title: "Podcast Clip 04",
    textClass: "text-[#ff3b30]",
    cardClass: "bg-[#3d2461]",
    ...createVideoAsset({
      publicId: "magricproductions/showcase/4",
    }),
  },
  {
    title: "Podcast Clip 05",
    textClass: "text-[#00d9ff]",
    cardClass: "bg-[#3d2461]",
    ...createVideoAsset({
      publicId: "magricproductions/showcase/5",
    }),
  },
  {
    title: "Podcast Clip 06",
    textClass: "text-[#ff00ff]",
    cardClass: "bg-[#3d2461]",
    ...createVideoAsset({
      publicId: "magricproductions/showcase/6",
    }),
  },
  {
    title: "Podcast Clip 07",
    textClass: "text-[#00ff88]",
    cardClass: "bg-[#3d2461]",
    ...createVideoAsset({
      publicId: "magricproductions/showcase/7",
    }),
  },
  {
    title: "Podcast Clip 08",
    textClass: "text-[#ffaa00]",
    cardClass: "bg-[#3d2461]",
    ...createVideoAsset({
      publicId: "magricproductions/showcase/8",
    }),
  },
];
