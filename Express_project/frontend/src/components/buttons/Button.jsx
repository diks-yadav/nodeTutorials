import React from 'react'

export default function Button(props) {
    console.log("props in Button.jsx",props);
  return (
    <div>
        <button onClick={props.onclick} style={{backgroundColor:props.backgroundColor}}>{props.name}</button>
    </div>
  )
}
