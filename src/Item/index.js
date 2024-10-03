import React, { Component } from 'react';
import '../style.css'
const Item=(props) =>{
        return (
            <li className='item'>
            {props.todo.body}
            <button onClick={()=>{props.delete(props.todo.id)}}>x</button>
            </li>
            
    );
}

export default Item;
