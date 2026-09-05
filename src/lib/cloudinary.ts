// src/lib/cloudinary.ts

/**
 * Injects Cloudinary transforms into a delivery URL.
 * Falls through untouched for non-Cloudinary URLs.
 */
export function cloudinaryUrl(
  url: string | null,
  opts: { width: number; height?: number } = { width: 400 }
): string | null {
  if (!url) return null;
  if (!url.includes("/upload/")) return url;

  const { width, height } = opts;
  const crop = height
    ? `w_${width},h_${height},c_fill,g_face`
    : `w_${width},c_limit`;

  return url.replace("/upload/", `/upload/${crop},f_auto,q_auto,dpr_auto/`);
}