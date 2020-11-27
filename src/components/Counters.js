import React from 'react'
import Counter from './Counter'

const Counters = ({ counters }) => {
  return (
    <div>
      <button className='btn btn-success m-2'>
        <i class='fas fa-redo-alt'></i>
      </button>
      <button className='btn btn-primary m-2'>
        <i className='fa fa-recycle' />
      </button>

      {counters.map((counter) => (
        <Counter key={counter.id} counter={counter} />
      ))}
    </div>
  )
}

export default Counters
