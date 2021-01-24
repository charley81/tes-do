import React from 'react'
import { AiFillEdit, AiFillDelete } from 'react-icons/ai'

const List = ({ items, removeItem, editItem }) => {
  return (
    <div className="list">
      {items.map(item => {
        const { id, title } = item
        return (
          <div className="list-item" key={id}>
            <p key={id}>{title}</p>
            <div className="btn-container">
              <button className="icon edit-btn" onClick={() => editItem(id)}>
                <AiFillEdit />
              </button>
              <button
                className="icon delete-btn"
                onClick={() => removeItem(id)}
              >
                <AiFillDelete />
              </button>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default List
