import { useEffect, useState } from 'react'

interface RandomNumberCounterProps {
  targetValue: number
  displayText?: string
}

const RandomNumberCounter = ({
  targetValue,
  displayText,
}: RandomNumberCounterProps) => {
  const [currentNumber, setCurrentNumber] = useState(0)
  const [cont, setCont] = useState(1)

  useEffect(() => {
    if (cont <= 30) {
      const intervalId = setInterval(() => {
        setCont(cont + 1)

        const newNumber = Math.floor(Math.random() * 999) + 1
        setCurrentNumber(newNumber)
      }, 40)

      return () => clearInterval(intervalId)
    } else {
      setCurrentNumber(targetValue)
    }
  }, [cont, targetValue])

  return (
    <section className='text-center w-full lg:w-auto'>
      <p className='text-8xl'>{currentNumber}</p>
      <p className='text-xl'>{displayText}</p>
    </section>
  )
}

export default RandomNumberCounter
