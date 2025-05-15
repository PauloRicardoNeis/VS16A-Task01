import styles from "./ImageGrid.module.scss";
import Image from "next/image";

export type ImageItem = {
    src: string;
    alt: string;
};

type ImageGridProps = {
    images: ImageItem[];
};

export default function ImageGrid({ images }: ImageGridProps) {
    return (
        <div className={styles.grid}>
            {images.map((img, index) => (
                <div key={index} className={styles.item}>
                    <Image
                        src={img.src}
                        alt={img.alt}
                        width={400}
                        height={300}
                        layout="responsive"
                        objectFit="cover"
                        loading="lazy"
                    />
                </div>
            ))}
        </div>
    );
}
