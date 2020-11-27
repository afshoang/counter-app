import React, { useState } from 'react'
import Header from './components/Header'
import Counters from './components/Counters'
import Counter from './components/Counter'

const App = () => {
  const initialCounters = [
    { id: 1, value: 0 },
    { id: 2, value: 0 },
    { id: 3, value: 0 },
    { id: 4, value: 0 },
  ]
  const [counters, setCounters] = useState(initialCounters)

  const onIncrement = () => {
    setCounters()
  }

  return (
    <>
      <Header totalCounters={counters.length} />
      <main className='container'>
        <Counters counters={counters} />
      </main>
    </>
  )
}

export default App
