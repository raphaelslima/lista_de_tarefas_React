import React from 'react'
import './form.css'
import { FaPlus } from 'react-icons/fa'

export default function Form(props) {
  return (
    <form action="#" className="form" onSubmit={props.handleSubmit}>
      <label for="newTask" className="sr-only">
        Digite sua tarefas
      </label>
      <input
        id="newTask"
        onChange={props.handleChange}
        type="text"
        value={props.novaTarefa}
      />
      <button type="submit">
        <FaPlus />
      </button>
    </form>
  )
}
