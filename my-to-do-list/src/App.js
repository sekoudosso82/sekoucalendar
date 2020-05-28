import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; 
import TodoList from './todos/TodoList';
import TodoListComplete from './todos/TodoListComplete'
import { connect } from 'react-redux';

import './App.css';

class App extends Component {
    componentDidMount(){
        
    }
    render(){
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

export default hot(module)(App);