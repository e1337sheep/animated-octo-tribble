import { useState, useEffect } from 'react'
import useFetch from './useFetch'
import useJSON from './useJSON'

const useFetchJSON = (url: RequestInfo, options?: RequestInit) => {
  const [fetchRes, fetchLoading, fetchErr] = useFetch(url, options)
  const [res, setRes] = useState<Response>(fetchRes)
  useEffect(() => {
    if (fetchErr) console.log("fetchErr::", fetchErr)
    else if (fetchRes.body && !fetchLoading) {
      console.log(fetchRes)
      setRes(fetchRes)
    }
  }, [fetchRes, fetchLoading, fetchErr])

  return useJSON(res)
}

export default useFetchJSON