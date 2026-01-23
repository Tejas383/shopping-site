import React from 'react'
import productsData from '../data/products.json'
import CardComponent from './CardComponent.jsx'

const Cards = () => {
  return (
    <div className="grid grid-cols-3 p-3 gap-3 w-full">
      {productsData.map((item, index) => (
        <CardComponent key={index} item={item} />
      ))}
    </div>
  )
}

export default Cards
