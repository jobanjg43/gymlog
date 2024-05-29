import React from 'react'

function Button(props) {
  return (
    <button name={props.name} className={props.className}><span className={props.textClass}>{props.value}</span></button>
  )
}

export default Button