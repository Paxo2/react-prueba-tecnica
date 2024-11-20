import { useCatImage } from './hooks/useCatImage'
import { useCatFact } from './hooks/useCatFact'
import './App.css'
//import { Otro } from './Components/Otro.jsx'


export function App (){
    const {fact,refreshFact} = useCatFact()
    const {imgUrl} = useCatImage({ fact })
    
    const handleClick = async () => {
        refreshFact()
    }

    return(
     <main >
         <h1>App de gatitos</h1>
         <button onClick={handleClick}>Get new fact</button>
        { fact && <p>{fact.hecho} {fact.largo}</p>}
        { imgUrl && <img  className='catPrincipal' src={imgUrl} alt={`imagen recuperada usando las primeras tres palabras de ${fact.hecho}`} /> }
        
     </main>   
)
}


