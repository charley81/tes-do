import React from 'react'
import List from './list'

const Main = ({ handleSubmit, clearItems, editing, todo, setTodo, items }) => {
  return (
    <section className="main-content">
      <div className="list-container">
        <List items={items} />
        <button className="btn" onClick={clearItems}>
          clear
        </button>
      </div>
      <form className="list-form" onSubmit={handleSubmit}>
        <div className="input-container">
          <input
            type="text"
            placeholder="add item"
            value={todo}
            onChange={e => setTodo(e.target.value)}
          />
          <button type="submit" className="btn submit-btn">
            {editing ? 'Edit' : 'Submit'}
          </button>
        </div>
      </form>
    </section>
  )
}

export default Main
