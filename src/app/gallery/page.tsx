import Title from "@/components/Title/Title";
import { images } from "@/data/images";
import ImageGallery from "@/components/ImageGallery/ImageGallery";

export default function GalleryPage() {
    return (
        <>
            <Title text="Image Gallery" />
            <ImageGallery images={images} />
        </>
    );
}
