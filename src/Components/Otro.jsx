import { useCatImage } from "../hooks/useCatImage.js"

export function Otro(){
    const fact = {hecho:"A tomcat [male"}
    const { imgUrl } = useCatImage({ fact:fact })
    console.log(imgUrl);
    
    return(
        <>
            { imgUrl && <img  src={imgUrl} className="catOtro" alt={`imagen recuperada usando las primeras tres palabras de ${fact.hecho}`} /> }
        </>
    )
}