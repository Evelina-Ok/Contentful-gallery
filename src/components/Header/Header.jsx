import { useEffect, useState } from 'react'
import * as contentful from "contentful";
import h from './Header.module.scss'

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
    }, [])

    return (
        <>
            <header className={h.Header}>
                <img src={headerImg?.items[0]?.fields.headerImage.fields.file.url} alt="" />
            </header>
        </>
    )
}