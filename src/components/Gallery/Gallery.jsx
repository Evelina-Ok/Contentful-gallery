import { useEffect, useState } from 'react'
import * as contentful from "contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

export const Gallery = () => {

    const client = contentful.createClient({
        space: import.meta.env.VITE_PUBLIC_SPACE_ID,
        accessToken: import.meta.env.VITE_PUBLIC_ACCESS_TOKEN,
    });
    
    const [gallery, setGallery] = useState()
    const [description, setDescription] = useState()

    useEffect(() => {
        client
        .getEntries({content_type: "about"})
        .then((res) => setDescription(res))
        
    }, [])
    // console.log(description);
    
    useEffect(() => {
        client
        .getEntries({ content_type: "gallery" })
        .then((res) => setGallery(res));
    }, []);

    return (
        <>
            <p>Gallery</p>
            {documentToReactComponents(description?.items[0]?.fields.aboutText)}

            {gallery?.items?.map((item, index) => (
                <img key={index} src={item.fields.image.fields.file.url} alt="" />
            ))}
        </>
    )
}