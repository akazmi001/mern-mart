export const getImageUrl = (imagePath) => {
  if (!imagePath) return "";

  // ✅ If already full URL → return as-is
  if (imagePath.startsWith("http")) {
    return imagePath;
  }

  // ✅ Otherwise build from backend
  const base = import.meta.env.VITE_API_URL.replace(/\/$/, "");
  const path = imagePath.startsWith("/") ? imagePath : `/${imagePath}`;

  return `${base}${path}`;
};