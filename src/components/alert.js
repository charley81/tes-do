import React, { useEffect } from 'react'

const Alert = ({ type, text, removeAlert }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      removeAlert()
    }, 1000)
  }, [])
  return (
    <div>
      <p className={`alert alert-${type}`}>{text}</p>
    </div>
  )
}

export default Alert
