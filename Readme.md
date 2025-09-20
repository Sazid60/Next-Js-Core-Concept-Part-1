# Next Js Core Concept Part-1

In this module, we’ll dive into the core concepts of Next.js to take your skills to the next level. You’ll learn how to optimize images, fonts, and metadata for better performance and SEO, explore pre-rendering strategies like SSG, SSR, and ISR, and practice advanced data fetching techniques. We’ll also cover global error handling, active links, and wrap up with hands-on tasks to solidify your learning.

## 52-1 Optimize image using Image Component
```tsx 
import Image from "next/image";
import nextImg from "../../../assets/31343C.svg" // for local 
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
```
- for the `Image` component we have to setup `next.config.mjs`

```mjs
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // images: {
  //   remotePatterns: [new URL('https://placehold.co/600x400/png')],
  // },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        // hostname: 's3.amazonaws.com', // for grabbing image from trusted sources only 
        hostname: '**', // this allows images from, all sources 
        // port: '',
        // pathname: '/my-bucket/**',
        // search: '',
      },
    ],
  },
};

export default nextConfig;

```

## 52-2 Optimize Fonts, Improve SEO with Metadata, and Use Import Aliases