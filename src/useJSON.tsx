import {useState, useEffect} from 'react'

// useJSON :: Response -> Object<JSON>
const useJSON = (res: Response): [any, boolean, any] => {
  const [json, setJson] = useState<any>({})
  const [busy, setBusy] = useState<boolean>(true)
  const [err, setErr]   = useState<any>(null)

  useEffect(()=>{
    res.json()
      .then(  j => setJson(j))
      .catch( e => setErr(e) )
    setBusy(false)
    return () => {
      setErr(null)
      setBusy(true)
    }
  }, [res])

  return [json, busy, err]
}

export default useJSON