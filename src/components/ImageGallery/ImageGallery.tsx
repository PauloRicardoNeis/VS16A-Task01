"use client";
import { useGallery, GalleryImage } from "@/hooks/useGallery";

type Props = {
    images: GalleryImage[];
};

export default function ImageGallery({ images }: Props) {
    const processed = useGallery(images);

    return (
        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            {processed.map((img) => (
                <img
                    key={img.id}
                    src={img.src}
                    alt={img.alt || "Galeria"}
                    style={{ width: "200px", height: "auto", borderRadius: "8px" }}
                />
            ))}
        </div>
    );
}
