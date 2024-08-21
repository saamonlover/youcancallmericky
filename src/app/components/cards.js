'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

const Card = ({ color, onClick, handleClick }) => (
  <motion.div
    whileHover={{ scale: 1.1 }}
    drag
    dragConstraints={{
      top: -5,
      left: -5,
      right: 5,
      bottom: 5,
    }}
    className='w-16 h-20 rounded-lg cursor-pointer'
    style={{ backgroundColor: color }}
    onClick={color !== '#B43F3F' ? onClick : handleClick}
    layoutId={`card-${color}`}
  ></motion.div>
)

const Cards = () => {
  const colors = ['#FF8225', '#B43F3F', '#173B45']
  const [selected, setSelected] = useState(null)

  return (
    <div className='mt-8 w-full'>
      <motion.div
        layout
        transition={{ layout: { duration: 1, type: 'spring' } }}
      >
        {!selected ? (
          <div className='flex justify-center gap-4'>
            {colors.map((color, index) => (
              <Card
                key={index}
                color={color}
                onClick={() => setSelected(color)}
              />
            ))}
          </div>
        ) : selected !== '#B43F3F' ? (
          <motion.div
            className='h-64 rounded-lg mx-auto'
            style={{ backgroundColor: selected, width: '25rem' }}
            layoutId={`card-${selected}`}
          ></motion.div>
        ) : null}
      </motion.div>
    </div>
  )
}

export default Cards
