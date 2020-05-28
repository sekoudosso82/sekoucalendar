
// import React from "react";

import "react-datepicker/dist/react-datepicker.css"; 
import React, { Component } from 'react';
import DatePicker from "react-datepicker";
import { connect } from 'react-redux';
import { createTodo } from './actions';
import './NewTodoForm.css';

class NewTodoForm extends Component {
    // state = {
    //     startDate: new Date()
    // };
     
    handleChange = date => {
        this.setState({
          startDate: date
        });
    };
    handleOnChange = (event) => {

        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render(){

        return (
            <div className="new-todo-form">
            <form>
                <input
                    className="new-todo-input"
                    type="text"
                    placeholder="Type your new todo here"
                    value={this.state.startDate}
                    onChange={this.handleOnChange} />
                <DatePicker
                    selected={this.state.startDate}
                    onChange={this.handleChange}/>
                <button
                    onClick={() => {
                        const isDuplicateText =
                            todos.some(todo => todo.text === inputValue);
                        if (!isDuplicateText) {
                            onCreatePressed(inputValue);
                            setInputValue('');
                        }
                        if (isDuplicateText) {
                            alert('Task already created !!!');
                        }
                    }}
                    className="new-todo-button">
                    Create Todo
                </button>
                </form>
            </div>
    );
}
};

const mapStateToProps = state => ({
    todos: state.todos,
});

const mapDispatchToProps = dispatch => ({
    onCreatePressed: text => dispatch(createTodo(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewTodoForm);
// // import React from "react";
// import DatePicker from "react-datepicker";
 
// import "react-datepicker/dist/react-datepicker.css"; 
// import React, { useState } from 'react';
// import { connect } from 'react-redux';
// import { createTodo } from './actions';
// import './NewTodoForm.css';

// const NewTodoForm = ({ todos, onCreatePressed }) => {
//     state = {
//         startDate: new Date()
//       };
     
//       handleChange = date => {
//         this.setState({
//           startDate: date
//         });
//       };
//     const [inputValue, setInputValue] = useState('');

//     return (
//         <div className="new-todo-form">
//             <input
//                 className="new-todo-input"
//                 type="text"
//                 placeholder="Type your new todo here"
//                 value={inputValue}
//                 onChange={e => setInputValue(e.target.value)} />
//             <DatePicker
//                 selected={this.state.startDate}
//                 onChange={this.handleChange}
//             />
//             <button
//                 onClick={() => {
//                     const isDuplicateText =
//                         todos.some(todo => todo.text === inputValue);
//                     if (!isDuplicateText) {
//                         onCreatePressed(inputValue);
//                         setInputValue('');
//                     }
//                     if (isDuplicateText) {
//                         alert('Task already created !!!');
//                     }
//                 }}
//                 className="new-todo-button">
//                 Create Todo
//             </button>
//         </div>
//     );
// };

// const mapStateToProps = state => ({
//      todos: state.todos,
// });

// const mapDispatchToProps = dispatch => ({
//     onCreatePressed: text => dispatch(createTodo(text)),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(NewTodoForm);