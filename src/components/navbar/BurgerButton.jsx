import React from 'react'
import './BurgerButton.css'

export const BurgerButton = (props) => {
  return (
    <div onClick={props.handleClick} className={`icon nav-icon-5 ${props.clicked?"open" :""}`}>
    <span></span>
    <span></span>
    <span></span>
  </div>
  )
}
