import React from 'react'
import { AiFillEdit, AiFillDelete } from 'react-icons/ai'

const List = ({ items }) => {
  return (
    <div className="list">
      {items.map(item => {
        const { id, title } = item
        return (
          <div className="list-item">
            <p key={id}>{title}</p>
            <div className="btn-container">
              <button>
                <AiFillEdit />
              </button>
              <button>
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
