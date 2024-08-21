import React from 'react'

const Cards = () => {
  const colors = ['#FF8225', '#B43F3F', '#173B45']

  return (
    <div className='mt-8'>
      <div className='flex justify-between gap-4'>
        {colors.map((color, index) => (
          <div
            key={index}
            className='w-16 h-20 rounded-lg'
            style={{ backgroundColor: color }}
          ></div>
        ))}
      </div>
    </div>
  )
}

export default Cards
