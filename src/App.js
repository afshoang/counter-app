import React, { useState } from 'react'
import Header from './components/Header'
import Counters from './components/Counters'

const App = () => {
  const initialCounters = [
    { id: 1, value: 0 },
    { id: 2, value: 0 },
    { id: 3, value: 0 },
    { id: 4, value: 0 },
  ]
  const [counters, setCounters] = useState(initialCounters)

  const onUndo = () => {
    const updatedCounters = counters.map((counter) => {
      counter.value = 0
      return counter
    })
    setCounters(updatedCounters)
  }

  const onReset = () => {
    if (counters.length <= 0) {
      setCounters(initialCounters)
    }
  }

  const onIncrement = (counterId) => {
    const updatedCounters = counters.map((counter) => {
      if (counter.id === counterId) {
        counter.value++
        return counter
      }
      return counter
    })
    setCounters(updatedCounters)
  }

  const onDecrement = (counterId) => {
    const updatedCounters = counters.map((counter) => {
      if (counter.id === counterId && counter.value > 0) {
        counter.value--
        return counter
      }
      return counter
    })
    setCounters(updatedCounters)
  }

  const onDelete = (counterId) => {
    const updatedCounters = counters.filter((counter) => {
      return counter.id !== counterId
    })
    setCounters(updatedCounters)
  }

  const totalCounters = () => {
    let count = 0
    for (let counter of counters) {
      if (counter.value > 0) {
        count++
      }
    }
    return count
  }

  return (
    <>
      <Header totalCounters={totalCounters()} />
      <main className='container'>
        <Counters
          counters={counters}
          onUndo={onUndo}
          onReset={onReset}
          onIncrement={onIncrement}
          onDecrement={onDecrement}
          onDelete={onDelete}
        />
      </main>
    </>
  )
}

export default App
