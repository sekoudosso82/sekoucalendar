import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { createTodo } from '../mainStore'
// import { createTodo } from './actions';
import './NewTodoForm.css';

class NewTodoForm extends Component {
    state = {
        user_id : 1,
        title: '',
        status: false,
        dateToDo: '',
    };
  
    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    };

    handleAddNewTask = (event) => {
        
            event.preventDefault()
        let data = {
            user_id : 1,
            title: this.state.title,
            status: this.state.status,
            dateToDo: this.state.dateToDo,
        } 
        console.log('** new task', data)
        fetch("https://sekoudossocalendar.herokuapp.com/tasks", {
            method: "POST",
            headers: {"Content-Type": "application/json",
                      "Accept": "application/json"},    
            body: JSON.stringify(data)
        })
        .then(resp=>resp.json())
        .then(data => {
            if(data.errors){
                alert(data.errors)} 
            else {
                alert('Successfully added')}
                this.props.createNewTodo(data)
        }) 

    }

    render(){
        return (
            <div >
                <form className="new-todo-form" onSubmit={this.handleAddNewTask} >
                    <input
                        className="new-todo-input"
                        type="text"
                        name='title'
                        placeholder="Type your new todo here"
                        value={this.state.title}
                        onChange={this.handleChange} />
                    <input
                        className="new-todo-date-input"
                        type="date"
                        name='dateToDo'
                        value={this.state.dateToDo}
                        onChange={this.handleChange}/>
                    <button className="new-todo-button" type='Submit' value="Submit" >
                        Create Todo
                    </button>
                    
                </form>
            </div>
        );
    }
};

const mdp = dispatch => ({
    // createNewTodo: (data) => dispatch(createTodo(data)),
    createNewTodo: (data) => dispatch({type: "CREATE_TODO", payload:(data)}),
    // deleteTodo: (data) => dispatch({type: "REMOVE_TODO", payload:(data)}),

});

export default connect(null, mdp)(NewTodoForm);

