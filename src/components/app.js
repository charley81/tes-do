import React, { useState, useEffect } from 'react'
import Alert from './alert'
import Main from './main'
import Title from './title'

const getLocalStorage = () => {
  let list = localStorage.getItem('list')

  if (list) {
    return JSON.parse(localStorage.getItem('list'))
  } else {
    return []
  }
}

function App() {
  const [todo, setTodo] = useState('')
  const [list, setList] = useState(getLocalStorage())
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
      handleAlert(true, 'danger', 'enter something!')
    } else if (todo && editing) {
      // handle edit
      setList(
        list.map(item => {
          if (item.id === editId) {
            return { ...item, title: todo }
          }
          return item
        })
      )
      setTodo('')
      setEditing(false)
      setEditId(null)
    } else {
      // add item
      const newItem = { id: new Date().getTime().toString(), title: todo }
      setList([...list, newItem])
      setTodo('')
      // show alert
      handleAlert(true, 'success', 'item added')
    }
  }

  const handleAlert = (show = false, type = '', text = '') => {
    setAlert({ show, type, text })
  }

  const clearItems = () => {
    handleAlert(true, 'danger', 'items cleared')
    setList([])
  }

  const removeItem = id => {
    handleAlert(true, 'danger', 'item removed')
    setList(list.filter(item => item.id !== id))
  }

  const editItem = id => {
    const selectedItem = list.find(item => item.id === id)
    setEditId(id)
    setEditing(true)
    setTodo(selectedItem.title)
  }

  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(list))
  }, [list])

  return (
    <div className="container">
      <Title />
      {alert.show && <Alert {...alert} removeAlert={handleAlert} list={list} />}
      <Main
        handleSubmit={handleSubmit}
        clearItems={clearItems}
        editing={editing}
        todo={todo}
        setTodo={setTodo}
        items={list}
        removeItem={removeItem}
        editItem={editItem}
      />
    </div>
  )
}

export default App
