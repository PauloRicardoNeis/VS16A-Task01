import dynamic from "next/dynamic";
import Title from "@/components/Title/Title";
import { images } from "@/data/images";

const ImageGrid = dynamic(() => import("@/components/ImageGrid/ImageGrid"), {
    loading: () => <p>Loading gallery...</p>
});

export default function GalleryPage() {
    return (
        <>
            <Title text="Image Gallery" />
            <ImageGrid images={images} />
        </>
    );
}
