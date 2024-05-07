import React from 'react'
import './Card.scss'
function Card({item}) {
  return (
    <div className='my__card'>
        <img src={item.img} alt="" />
        <h2>{item.title}</h2>
        <span>{item.price} som</span>
        
    </div>
  )
}

export default Card