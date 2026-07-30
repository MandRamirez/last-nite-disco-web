import fs from "node:fs";
import path from "node:path";
import { galleryItems, type GalleryItem } from "@/lib/constants/gallery";

export type GalleryItemResolved = GalleryItem & {
  available: boolean;
  posterAvailable?: boolean;
};

function existsInPublic(relativeSrc: string) {
  return fs.existsSync(path.join(process.cwd(), "public", relativeSrc));
}

/**
 * Server-only helper: checks which gallery photos/videos actually exist on
 * disk under /public so the client can render a themed placeholder instead
 * of a broken image/video for files that haven't been uploaded yet.
 */
export function getGalleryItems(): GalleryItemResolved[] {
  return galleryItems.map((item) => {
    const available = existsInPublic(item.src);
    if (item.type === "video" && item.poster) {
      return { ...item, available, posterAvailable: existsInPublic(item.poster) };
    }
    return { ...item, available };
  });
}
