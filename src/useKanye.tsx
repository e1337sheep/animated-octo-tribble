import {useState, useEffect} from 'react'
import useFetchJSON from './useFetchJSON'

// useKanye :: `More?` -> `:(`
const useKanye = (fire: boolean, initial: string) => {
  const [jsonData, jsonBusy, jsonErr] = useFetchJSON('https://api.kanye.rest')
  const [quote, setQuote] = useState<string>(initial)
  useEffect(() => {
    if(jsonErr) {
      console.log("useKanye::", jsonErr)
      setQuote("ERROR!!")
    }
    else if(!jsonBusy && jsonData.quote){
      console.log("useKanye::", jsonData.quote)
      setQuote(jsonData.quote)
    }
    return () => { }
  }, [jsonBusy, jsonData.quote, jsonErr])

  return [quote]
}

export default useKanye