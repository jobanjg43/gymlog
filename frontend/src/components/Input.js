import React from 'react'

function Input(props) {
  return (
    <input type={props.type} name={props.name} value={props.value} className={props.className} id={props.id} placeholder={props.placeholder} />
  )
}

export default Input