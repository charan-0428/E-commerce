import React from 'react'
import './Breadcrum.css'
import arrow_icon from '../assets/breadcrum_arrow.png'

export const Breadcrum = () => {
  return (
    <div className="breadcom">
        HOME <img src={arrow_icon} alt="" />SHOP <img src={arrow_icon} alt="" /> {Product.category} <img src={arrow_icon} alt="" /> {product}
    </div>
  )
}
