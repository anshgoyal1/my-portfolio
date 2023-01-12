import React from 'react'
import './FloatingDiv.css'

export const FloatingDiv = (props) => {
  return (
    <div className='floating-div'>
    <img src = {props.image} alt = 'Crown' className = 'floating-div-img' />
    <span>
        {props.txt1}
        <br />
        {props.txt2}
    </span>
    </div>
  )
}
