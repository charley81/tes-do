import React, { useState, useEffect } from 'react'
import Alert from './alert'
import Main from './main'
import Title from './title'

function App() {
  const [todo, setTodo] = useState('')
  const [list, setList] = useState([])
  const [editing, setEditing] = useState(false)
  const [editId, setEditId] = useState(null)
  const [alert, setAlert] = useState({
    show: false,
    type: '',
    text: '',
  })

  const handleSubmit = e => {
    e.preventDefault()

    if (!todo) {
      // set alert
    } else if (todo && editing) {
      // handle edit
    } else {
      // add item
      const newItem = { id: new Date().getTime().toString(), title: todo }
      setList([...list, newItem])
      setTodo('')
      // show alert
    }
  }

  const clearItems = () => {
    setList([])
  }

  return (
    <div className="container">
      <Title />
      {alert.show && <Alert />}
      <Main
        handleSubmit={handleSubmit}
        clearItems={clearItems}
        editing={editing}
        todo={todo}
        setTodo={setTodo}
        items={list}
      />
    </div>
  )
}

export default App
