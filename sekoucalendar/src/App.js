import React, {Component} from 'react';
import { Route, Switch } from 'react-router-dom'; 
import TodoList from './todos/TodoList';
import TodoListComplete from './todos/TodoListComplete'
import NewTodoForm from './todos/NewTodoForm'
import { connect } from 'react-redux';
import { fetchToDoLists } from './mainStore'
import NavBar from './NavBar'

import './App.css';

class App extends Component {
    componentDidMount(){
        this.props.fetchAllTodo()  
    }
    render(){
        // console.log('****************app activeToDOList********',this.props.todolist)

        return(
            <div className="App">
                <NavBar fixed="top"  logout={this.logout} />
                <Switch>
                    <Route path='/todolist' component={TodoList} /> 
                    <Route path='/complete' component={TodoListComplete} />
                    <Route path='/' component={TodoList} /> 
                </Switch>
            </div>

        )
    }
};

function msp(state){
    return {
      connectTodolist: state.activeToDOList,
      
    }
  }

const mdp = dispatch => {
    return {
        fetchAllTodo: () => dispatch(fetchToDoLists()), 
    }
  }

export default connect(msp, mdp)(App);