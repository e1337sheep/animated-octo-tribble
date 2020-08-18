import {useState, useEffect} from 'react'

const useFetch = (url: RequestInfo, options?: RequestInit): [Response, boolean, any] => {
  const [response, setResponse] = useState<Response>(new Response())
  const [error, setError] = useState()
  const [loading, setLoading] = useState<boolean>(true)
  useEffect(() => {
    fetch(url, options)
      .then(res => {
        setResponse(res)
        setLoading(false)
      })
      .catch(e => {
        console.log("==ERROR==\nuseFetch\n", e)
        setError(e)
        setLoading(false)
      })
    return () => setLoading(true)
  }, [url, options])
  return [response, loading, error]
}

export default useFetch