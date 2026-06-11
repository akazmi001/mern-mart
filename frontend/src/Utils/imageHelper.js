export const getImageUrl = (image) => {
  if (!image) return "";

  // Already full URL (Cloudinary etc.)
  if (image.startsWith("http")) return image;

  return `${import.meta.env.VITE_API_URL}${image}`;
};