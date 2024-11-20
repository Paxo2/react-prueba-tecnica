import { useEffect, useState } from "react"

export function useCatImage({ fact }){
    const [imgUrl, setImgUrl] = useState()

     //efecto para recuperar la imagen cada vez que tenemos un hehcho
     useEffect(()=>{          
        if(!fact) return

        const threefirstWord = fact.hecho.split(" ",3).join(" ") //fact.split(" ").slice(0,3).join(" ") ambas son validas slice sirve para quedarte con x cantidad de elementos de un array, y join los transforma en string
        
        fetch(`https://cataas.com/cat/says/${threefirstWord}?fontSize=60&fontColor=red`)
        .then(res => {
            const { url } = res
            setImgUrl(url)
        })
    },[fact])
    return {imgUrl}

}