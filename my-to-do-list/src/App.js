import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; 
import TodoList from './todos/TodoList';
import TodoListComplete from './todos/TodoListComplete'
import { connect } from 'react-redux';
import { fetchToDoLists } from './mainStore'

import './App.css';

class App extends Component {
    componentDidMount(){
        this.props.fetchAllTodos()  
    }
    render(){
        console.log('****************app activeToDOList********',this.props.todolist)

        return(
            <div className="App">
                <Switch>
                    <Route path='/todolist' component={TodoList} /> 
                    <Route path='/complete' component={TodoListComplete} /> 
                </Switch>
            </div>

        )
    }
};

function msp(state){
    return {
      todolist: state.activeToDOList,
      
    }
  }

const mdp = dispatch => {
    return {
        fetchAllTodos: () => dispatch(fetchToDoLists()), 
    }
  }

export default connect(msp, mdp)(App);