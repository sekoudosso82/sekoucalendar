import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';
// import TodoListComplete from './todos/TodoListComplete'; 
// import {connect} from 'react-redux'

function NavBar(props){
    // console.log('nav bar prop shoppingCartItems length', props.shoppingCartItems.length)
    // console.log('nav bar prop current user', props.currentUser)
  return (
   <div className="  fixed-top navbar" >
   
          {/* <div className="navDiv">  */}
          
            <Link to="/">
                <div className="navCLass " >Home</div>
            </Link>
          
            <Link to="/complete">
                <div className="navCLass " >Complete Tasks</div>
            </Link>
      </div>
      
  )
}
export default NavBar
