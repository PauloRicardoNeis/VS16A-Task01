import Image from "next/image";
import styles from "./GalleryImage.module.scss";

type GalleryImageProps = {
    src: string;
    alt: string;
};

export default function GalleryImage({ src, alt }: GalleryImageProps) {
    return (
        <div className={styles.container}>
            <Image
                src={src}
                alt={alt}
                width={400}
                height={300}
                layout="responsive"
                objectFit="cover"
                loading="lazy"
            />
        </div>
    );
}
