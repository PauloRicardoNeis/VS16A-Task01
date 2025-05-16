"use client";
import { useGallery, GalleryImage } from "@/hooks/useGallery";
import Image from "next/image";

type Props = {
    images: GalleryImage[];
};

export default function ImageGallery({ images }: Props) {
    const processed = useGallery(images);

    return (
        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            {processed.map((img) => (
                <Image
                    key={img.id}
                    src={img.src}
                    alt={img.alt || "Galeria"}
                    width={200}
                    height={200}
                    style={{ borderRadius: "8px", objectFit: "cover" }}
                />
            ))}
        </div>
    );
}
