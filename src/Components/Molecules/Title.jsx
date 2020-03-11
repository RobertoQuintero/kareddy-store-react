import React from 'react'

const Title = ({name,title}) => (
  <div className='row'>
      <div className="col-10 mx-auto my- text-center text-title my-1">
        <h1 className='text-capitalize font-weight-bold'>
          {name} <strong className='text-blue'>{title}</strong>
        </h1>
      </div>
    </div>
)

export default Title
