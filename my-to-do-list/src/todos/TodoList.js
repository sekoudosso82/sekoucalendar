import React,{Component} from 'react';
import { connect } from 'react-redux';
import { fetchToDoLists } from '../mainStore'
import NewTodoForm from './NewTodoForm';
import TodoListItem from './TodoListItem';
// import { removeTodo } from './actions';
import './TodoList.css';

class TodoList extends Component{
    state = {
        activeToDOList: []
    }
    componentDidMount(){
        // fetch('http://localhost:3000/tasks')
        // .then(resp => resp.json())
        // .then(activeToDOList => { this.setState({ activeToDOList: activeToDOList })
        // })
        this.props.fetchTodos()
      } 
    render(){
        console.log('****************todolist********',this.props.activeToDOList)
        return(
            <div className="list-wrapper">
                <NewTodoForm />
                {this.props.activeToDOList.map(todo => <TodoListItem {...todo} />)}
            </div>
        )
    }
};

const msp = state => ({
    activeToDOList: state.activeToDOList,
});

// const mapDispatchToProps = dispatch => ({
//     onRemovePressed: text => dispatch(removeTodo(text)),
// });

const mdp = dispatch => {
    return {
        fetchTodos: () => dispatch(fetchToDoLists()),
    }
}
  

export default connect(msp, mdp)(TodoList);