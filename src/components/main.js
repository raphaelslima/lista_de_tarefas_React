import React, { Component } from 'react'
import './main.css'
import Form from './Form'
import List from './List'

export default class Main extends Component {
  state = {
    novaTarefa: '',
    tarefas: []
  }

  // ADICIONA TAREFAS DO LOCAL STORAGE PARA O LAYOUT
  componentDidMount() {
    const tarefas = JSON.parse(localStorage.getItem('tarefas'))

    if (!this.state.tarefas) return

    this.setState({
      tarefas
    })
  }

  //SALVA TAREFAS NO LOCAL STORAGE
  componentDidUpdate(prevState) {
    if (this.state.tarefas === prevState.tarefas) return

    localStorage.setItem('tarefas', JSON.stringify(this.state.tarefas))
  }

  //ADICINA TAREFA NA LISTA
  handleSubmit = e => {
    e.preventDefault()

    this.setState({
      novaTarefa: this.state.novaTarefa.trim()
    })

    if (this.state.tarefas.indexOf(this.state.novaTarefa) !== -1) return

    this.setState({
      tarefas: [...this.state.tarefas, this.state.novaTarefa],
      novaTarefa: ''
    })
  }

  // CAPTURA TAREFA DO INPUT
  handleChange = e => {
    this.setState({
      novaTarefa: e.target.value
    })
  }

  // DELETA TAREFA
  handleDelete = (e, index) => {
    const novasTarefas = this.state.tarefas
    novasTarefas.splice(index, 1)

    this.setState({
      tarefas: [...novasTarefas]
    })
  }

  // EDITA A TAREFA
  handleEdit = (e, index) => {
    if (this.state.novaTarefa === '') return

    this.setState({
      novaTarefa: this.state.novaTarefa.trim()
    })

    const novasTarefas = this.state.tarefas

    novasTarefas[index] = this.state.novaTarefa

    this.setState({
      tarefas: [...novasTarefas]
    })
  }

  render() {
    return (
      <div className="main">
        <h1>Lista de tarefas</h1>
        <Form
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          novaTarefa={this.state.novaTarefa}
        />
        <List
          tarefas={this.state.tarefas}
          handleEdit={this.handleEdit}
          handleDelete={this.handleDelete}
        />
      </div>
    )
  }
}
