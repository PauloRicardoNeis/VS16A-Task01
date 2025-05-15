import ImageGrid from "@/components/ImageGrid/ImageGrid";
import Title from "@/components/Title/Title";
import { images } from "@/data/images";

export default function GalleryPage() {
    return (
        <>
            <Title text="Image Gallery" />
            <ImageGrid images={images} />
        </>
    );
}
