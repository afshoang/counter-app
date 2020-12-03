import React from 'react'
import Counter from './Counter'

const Counters = ({
  counters,
  onUndo,
  onReset,
  onIncrement,
  onDecrement,
  onDelete,
}) => {
  return (
    <div>
      <button className='btn btn-success m-2' onClick={() => onUndo()}>
        <i class='fas fa-redo-alt'></i>
      </button>
      <button
        className={`btn btn-primary m-2 ${
          counters.length > 0 ? 'disabled' : ''
        }`}
        onClick={() => onReset()}
      >
        <i className='fa fa-recycle' />
      </button>

      {counters.map((counter) => (
        <Counter
          key={counter.id}
          counter={counter}
          onIncrement={onIncrement}
          onDecrement={onDecrement}
          onDelete={onDelete}
        />
      ))}
    </div>
  )
}

export default Counters
