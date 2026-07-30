/**
 * Gallery source list. Photos are expected at /public/gallery/event{n}.jpg
 * and videos at /public/gallery/event{n}.mp4 (with an optional poster
 * thumbnail at the same name, e.g. event{n}-poster.jpg).
 *
 * If a file is missing, <GalleryMedia> gracefully renders a themed gradient
 * placeholder instead of a broken image/video — drop real files in with
 * these exact filenames to replace them automatically, no code changes needed.
 */
export type GalleryItem =
  | {
      type: "image";
      src: string;
      alt: string;
      /** Taller tiles create visual rhythm in the masonry layout. */
      tall?: boolean;
    }
  | {
      type: "video";
      src: string;
      /** Optional thumbnail shown in the grid before the video is opened. */
      poster?: string;
      alt: string;
      tall?: boolean;
    };

export const galleryItems: GalleryItem[] = [
  {
    type: "image",
    src: "/gallery/event1.jpg",
    alt: "Ambiente de fiesta con Last Nite Disco",
    tall: true,
  },
  { type: "image", src: "/gallery/event2.jpg", alt: "Pista de baile en una de nuestras fiestas" },
  {
    type: "video",
    src: "/gallery/event3.mp4",
    alt: "Highlights en video de una de nuestras fiestas",
  },
  {
    type: "video",
    src: "/gallery/event4.mp4",
    alt: "Highlights en video de una de nuestras fiestas",
    tall: true,
  },
  {
    type: "video",
    src: "/gallery/event5.mp4",
    alt: "Highlights en video de una de nuestras fiestas",
  },
  {
    type: "video",
    src: "/gallery/event6.mp4",
    alt: "Highlights en video de una de nuestras fiestas",
    tall: true,
  },
];
