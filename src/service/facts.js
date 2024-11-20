const CAT_ENDPOINT_RANDOM_FACT = `https://catfact.ninja/fact`

export const getRandomFact = async () =>{
    const res = await fetch(CAT_ENDPOINT_RANDOM_FACT)
    const data = await res.json()
    const { fact,length } = data
    const factDict = {
        hecho: fact,
        largo: length
    }
    return factDict
}