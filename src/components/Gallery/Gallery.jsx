import { useEffect, useState } from 'react'
import * as contentful from "contentful";

export const Gallery = () => {

    const client = contentful.createClient({
        space: import.meta.env.VITE_PUBLIC_SPACE_ID,
        accessToken: import.meta.env.VITE_PUBLIC_ACCESS_TOKEN,
    });
    
    const [gallery, setGallery] = useState()

    useEffect(() => {
        client
            .getEntries({ content_type: "gallery" })
            .then((res) => setGallery(res));
    }, []);

    return (
        <>
            <p>Gallery</p>

            {gallery?.items?.map((item) => (
                <img src={item.fields.image.fields.file.url} alt="" />
            ))}
        </>
    )
}