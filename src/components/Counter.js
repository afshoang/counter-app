import React from 'react'

const Counter = ({ counter, onIncrement, onDecrement, onDelete }) => {
  const getBadge = () => {
    return counter.value > 0
      ? 'badge badge-pill badge-primary'
      : 'badge badge-pill badge-dark'
  }

  return (
    <>
      <div>
        <div className='row'>
          <div className='col-md-1'>
            <span style={{ fontSize: 24 }} className={getBadge()}>
              {counter.value}
            </span>
          </div>
          <div className='col-md-4'>
            <button
              className='btn btn-secondary'
              onClick={() => onIncrement(counter.id)}
            >
              <i className='fa fa-plus-circle' />
            </button>
            <button
              className={`btn btn-info m-2 
              ${counter.value <= 0 ? 'disabled' : ''}`}
              onClick={() => onDecrement(counter.id)}
            >
              <i className='fa fa-minus-circle' />
            </button>
            <button
              className='btn btn-danger'
              onClick={() => onDelete(counter.id)}
            >
              <i className='far fa-trash-alt'></i>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Counter
