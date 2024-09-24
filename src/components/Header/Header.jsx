import { useEffect, useState } from 'react'
import * as contentful from "contentful";

export const Header = () => {

    const client = contentful.createClient({
        space: import.meta.env.VITE_PUBLIC_SPACE_ID,
        accessToken: import.meta.env.VITE_PUBLIC_ACCESS_TOKEN,
    });
    
    const [headerImg, setHeaderImg] = useState()

    useEffect(() => {
        client
        .getEntries({content_type: "header"})
        .then((res) => setHeaderImg(res))
        // console.log(setHeaderImg);
        
    })

    return (
        <>
            <header>
                <p>This is the header</p>
                <img src={headerImg?.items[0]?.fields.headerImage.fields.file.url} alt="" />
            </header>
        </>
    )
}