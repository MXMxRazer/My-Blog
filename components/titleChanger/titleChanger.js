import { useEffect } from "react";

export default function TitleChanger({ title }) {

    useEffect(() => {
        document.title = title;
    }, []);

}