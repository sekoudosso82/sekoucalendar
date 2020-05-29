
// import React from "react";

// import "react-datepicker/dist/react-datepicker.css"; 
import React, { Component } from 'react';
// import DatePicker from "react-datepicker";
import { connect } from 'react-redux';
import { createTodo } from './actions';
import './NewTodoForm.css';

class NewTodoForm extends Component {
    state = {
        dateToDo: '',
        title: '',
    };
    
     
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    };
    
    render(){

        return (
            <div >
                <form className="new-todo-form" >
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



// const mdp = dispatch => ({
//     onCreatePressed: (data) => dispatch(createTodo(data)),
// });

// export default connect(null, mdp)(NewTodoForm);
export default NewTodoForm
