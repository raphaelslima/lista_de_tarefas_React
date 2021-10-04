import React from 'react'
import './list.css'
import { FaEdit, FaWindowClose } from 'react-icons/fa'

export default function List(props) {
  return (
    <ul className="tarefas">
      {props.tarefas.map((tarefa, index) => (
        <li>
          {tarefa}
          <div>
            <FaEdit
              className="edit"
              onClick={e => props.handleEdit(e, index)}
            />
            <FaWindowClose
              className="close"
              onClick={e => props.handleDelete(e, index)}
            />
          </div>
        </li>
      ))}
    </ul>
  )
}
