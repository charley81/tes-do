import React from 'react'
import List from './list'

const Form = ({ handleSubmit, clearItems }) => {
  return (
    <section>
      <form className="list-form" onSubmit={handleSubmit}></form>
      <div className="list-container">
        <List />
        <button className="btn" onClick={clearItems}>
          clear
        </button>
      </div>
    </section>
  )
}

export default Form
