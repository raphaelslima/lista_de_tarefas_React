import React, { Component } from 'react'
import './main.css'
import { FaPlus, FaEdit, FaWindowClose } from 'react-icons/fa'

export default class Main extends Component {
  state = {
    novaTarefa: '',
    tarefas: []
  }

  //ADICINA TAREFA NA LISTA
  handleSubmit = e => {
    e.preventDefault()
    this.state.novaTarefa = this.state.novaTarefa.trim()

    if (this.state.tarefas.indexOf(this.state.novaTarefa) !== -1) return

    this.setState({
      tarefas: [...this.state.tarefas, this.state.novaTarefa]
    })
  }

  // CAPTURA TAREFA DO INPUT
  handleChange = e => {
    this.setState({
      novaTarefa: e.target.value
    })
  }

  render() {
    return (
      <div className="main">
        <h1>Lista de tarefas</h1>
        <form action="#" className="form" onSubmit={this.handleSubmit}>
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
