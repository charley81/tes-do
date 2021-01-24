import React, { useEffect } from 'react'

const Alert = ({ type, text, removeAlert, list }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      removeAlert()
    }, 2000)
    return () => clearTimeout(timeout)
  }, [list])
  return (
    <div>
      <p className={`alert alert-${type}`}>{text}</p>
    </div>
  )
}

export default Alert
