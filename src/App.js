import React, { useState, useEffect } from 'react'

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
  return (
    <div className="App">
      <h3>myDo_V1</h3>
    </div>
  )
}

export default App
