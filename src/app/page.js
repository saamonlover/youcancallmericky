'use client'

import Cards from '../app/components/cards'
import { useState } from 'react'

export default function Home() {
  const [selected, setSelected] = useState(null)

  return (
    <main className='flex min-h-screen flex-col justify-center items-center'>
      {!selected ? (
        <>
          <div className='flex flex-col items-center'>
            <h1
              className={`text-4xl font-bold ${selected !== null ? 'fade-out' : ''}`}
            >
              You can call me Ricky
            </h1>
            <h1
              className={`text-2xl font-bold text-zinc-600 ${selected !== null ? 'fade-out' : ''}`}
            >
              yccmr
            </h1>
          </div>
          <Cards selected={selected} setSelected={setSelected} />
        </>
      ) : (
        <Cards selected={selected} setSelected={setSelected} />
      )}
    </main>
  )
}
