import Cards from '../app/components/cards'

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col justify-center items-center'>
      <h1 className='text-4xl font-bold'>You can call me Ricky</h1>
      <h1 className='text-2xl font-bold text-zinc-600'>yccmr</h1>
      <Cards />
    </main>
  )
}
