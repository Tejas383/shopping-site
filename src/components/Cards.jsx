import React from 'react'
import productsData from '../data/products.json'
import CardComponent from './CardComponent.jsx'

const Cards = ({cols}) => {
  console.log(cols)
  return (
    <div className="grid  p-3 gap-3 w-full" style={{ gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))` }}>
    {/* <div className={`grid grid-cols-[${cols}] gap-3 p-3 w-full`}> */}
      {productsData.map((item, index) => (
        <CardComponent key={index} item={item} />
      ))}
    </div>
  )
}

export default Cards
