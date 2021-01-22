import React, { useState, useEffect } from 'react'
import Alert from './alert'
import Form from './form'
import Title from './title'

function App() {
  const [todo, setTodo] = useState('')
  const [list, setList] = useState([])
  const [editing, isEditing] = useState(false)
  const [editId, setEditId] = useState(null)
  const [alert, setAlert] = useState({
    show: false,
    type: '',
    text: '',
  })

  const handleSubmit = e => {
    e.preventDefault()
    console.log('submitted')
  }

  const clearItems = () => {
    console.log('cleared')
  }

  return (
    <div className="container">
      <Title />
      <div className="list-container">
        {alert.show && <Alert />}
        <Form handleSubmit={handleSubmit} clearItems={clearItems} />
      </div>
    </div>
  )
}

export default App
