import Image from "next/image";
import nextImg from "@/assets/31343C.svg" // for local 
const GalleryPage = () => {
    return (
        <div className="text-center">
            <h1>Regular Image Tag</h1>
            <img src="https://placehold.co/600x400" alt="" width={500} height={500} className="mx-auto" />

            <h1>Next.js image Component</h1>

            <Image src="https://placehold.co/600x400/png" alt="next image" width={500} height={500} className="mx-auto" />

            <h1>Local image Component</h1>

            {/* for local width and height is not mandatory actually  */}
            <Image src={nextImg} alt="next image" className="mx-auto" />

            <h1>From Public Local</h1>

            <Image src="/31343C.svg" alt="next image" width={500} height={500} className="mx-auto" />

        </div>
    );
};

export default GalleryPage;