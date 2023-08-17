import RandomNumberCounter from './components/RandomNumberCounter'

const App = () => {
  return (
    <section className='min-h-screen grid place-content-center'>
      <section className='flex flex-wrap gap-8'>
        <RandomNumberCounter targetValue={231} displayText='Happy Customers' />
        <RandomNumberCounter targetValue={385} displayText='Issues Solved' />
        <RandomNumberCounter targetValue={159} displayText='Good Reviews' />
        <RandomNumberCounter targetValue={128} displayText='Case Studies' />
      </section>
    </section>
  )
}

export default App
