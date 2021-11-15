import axios from 'axios';
import React, { Component } from 'react'

import PageHeader from '../template/pageHeader'
import List from './list'





const URL = 'http://localhost:3001/todos'

export default class Todo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            description: '',
            list: [],
                     
        }


        //this.handleClick= this.handleClick.bind(this);

        this.handleChange = this.handleChange.bind(this)
        this.handleAdd = this.handleAdd.bind(this)
        this.handleSearch = this.handleSearch.bind(this)
        this.handleClear = this.handleClear.bind(this)

        this.handleMarkAsDone = this.handleMarkAsDone.bind(this)
        this.handleMarkAsPending = this.handleMarkAsPending.bind(this)
        this.handleRemove = this.handleRemove.bind(this)


        this.refresh()
    }

    refresh(description = '') {
        const search = description ? `&description__regex=/${description}/` : ''
        axios.get(`${URL}?sort=-db${search}`)
            .then(resp => this.setState({ ...this.state, description, list: resp.data }))
    }

    handleSearch() {
        this.refresh(this.state.description)
    }

    handleChange(e) {
        this.setState({ ...this.state, description: e.target.value })
    }

    handleAdd() {
        const description = this.state.description
        axios.post(URL, { description })
            .then(resp => this.refresh())
    }

    handleRemove(todo) {
        axios.delete(`${URL}/${todo.id}`)
            .then(resp => this.refresh(this.state.description))
    }

    handleMarkAsDone(todo) {
        axios.put(`${URL}/${todo.id}`, { ...todo, done: true })
            .then(resp => this.refresh(this.state.description))
    }

    handleMarkAsPending(todo) {
        axios.put(`${URL}/${todo.id}`, { ...todo, done: false })
            .then(resp => this.refresh(this.state.description))
    }

    handleClear() {
        this.refresh()
    }

    // function para auxiliar na alternância de valores
    





    render() {
        return (
            <div>
                <PageHeader name='Tarefas' small='Cadastro'></PageHeader>



                <List

                    list={this.state.list}
                    
                  
                />


            </div>
        )
    }
}