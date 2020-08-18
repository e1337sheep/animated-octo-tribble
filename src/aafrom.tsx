import React from 'react'

// type key = string
// type Value = String

// option :: (key, Value)
type option = [string, String]

// Advselector :: [(k, v)] -> Component
type AdvSelectorProps = {
  className: string
  name: string
  id: string
  options: Array<option>
}
const AdvSelector = (props: AdvSelectorProps) => {
    return <select
      className={props.className}
      name={props.name}
      id={props.id}
    >
      {
        props.options.map(o => <option key={o[0]} value={o[0]}>{o[1]}</option>)
      }
    </select>
  }

const option = (k: string, v: String) => {
  
  return (
    <option></option>
  )
}

export default AdvSelector