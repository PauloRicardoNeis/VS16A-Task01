export type GalleryImage = {
    src: string;
    alt?: string;
};

export function useGallery(images: GalleryImage[]) {
    return images.map((img, i) => ({
        ...img,
        id: `img-${i}`,
    }));
}
