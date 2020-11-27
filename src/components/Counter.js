import React from 'react'

const Counter = () => {
  return (
    <>
      <div>
        <div className='row'>
          <div className='col-md-1'>
            <span style={{ fontSize: 24 }}>x</span>
          </div>
          <div className='col-md-4'>
            <button className='btn btn-secondary'>
              <i className='fa fa-plus-circle' />
            </button>
            <button className='btn btn-info m-2'>
              <i className='fa fa-minus-circle' />
            </button>
            <button className='btn btn-danger'>
              <i class='far fa-trash-alt'></i>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Counter
