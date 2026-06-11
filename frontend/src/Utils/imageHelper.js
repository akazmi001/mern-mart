export const getImageUrl = (imagePath) => {
  if (!imagePath) return "";

  const base = import.meta.env.VITE_API_URL.replace(/\/$/, "");
  const path = imagePath.startsWith("/") ? imagePath : `/${imagePath}`;

  return `${base}${path}`;
};