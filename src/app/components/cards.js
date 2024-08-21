'use client'

const Cards = () => {
  const colors = ['#FF8225', '#B43F3F', '#173B45']

  const handleClick = (color) => {
    alert(`Card with color ${color} clicked!`)
  }

  return (
    <div className='mt-8'>
      <div className='flex justify-between gap-4'>
        {colors.map((color, index) => (
          <div
            key={index}
            className='w-16 h-20 rounded-lg cursor-pointer'
            style={{ backgroundColor: color }}
            onClick={() => handleClick(color)}
          ></div>
        ))}
      </div>
    </div>
  )
}

export default Cards
