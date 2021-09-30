import React, { Component } from 'react'
import './main.css'
import { FaPlus, FaEdit, FaWindowClose } from 'react-icons/fa'

export default class Main extends Component {
  state = {
    novaTarefa: '',
    tarefas: ['Fazer café', 'Fazer almoço', 'Estudar']
  }

  handleChange = e => {
    this.setState({
      novaTarefa: e.target.value
    })
  }

  render() {
    return (
      <div className="main">
        <h1>Lista de tarefas</h1>
        <form action="#" className="form">
          <label for="newTask" className="sr-only">
            Digite sua tarefas
          </label>
          <input
            id="newTask"
            onChange={this.handleChange}
            type="text"
            value={this.state.novaTarefa}
          />
          <button type="submit">
            <FaPlus />
          </button>
        </form>
        <ul className="tarefas">
          {this.state.tarefas.map(tarefa => (
            <li>
              {tarefa}
              <div>
                <FaEdit className="edit" />
                <FaWindowClose className="close" />
              </div>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}
