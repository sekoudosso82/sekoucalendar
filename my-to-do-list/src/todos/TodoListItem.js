import React, {Component} from 'react';
import './TodoListItem.css';


class TodoListItem extends Component {
    render(){
        console.log('************this.props.title**********', this.props.title)
        return(
            <div className="todo-item-container">
                <h3>{this.props.title}</h3>
                <div className="buttons-container">
                    <button className="completed-button">Mark As Completed</button>
                    <button className="remove-button">Remove</button>
                </div>
            </div>
        )
    }
};

export default TodoListItem;