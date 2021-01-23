import React from 'react'

const Alert = ({ type, text }) => {
  return (
    <div>
      <p className={`alert alert-${type}`}>{text}</p>
    </div>
  )
}

export default Alert
