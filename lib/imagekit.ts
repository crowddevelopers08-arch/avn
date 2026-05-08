export const IMAGEKIT_BASE_URL = "https://ik.imagekit.io/waseev72f";

export function withImageKit(path: string) {
  if (!path) return path;

  if (
    path.startsWith("http://") ||
    path.startsWith("https://") ||
    path.startsWith("data:") ||
    path.startsWith("blob:")
  ) {
    return path;
  }

  const normalizedPath = path.startsWith("/") ? path.slice(1) : path;
  return `${IMAGEKIT_BASE_URL}/${normalizedPath}`;
}
