import React, { Component } from 'react';
import Item from '../Item';
import '../style.css'
const List =(props)=>{
    return (
        <ol className='list'>
            {props.list.map(todo=><Item todo={todo} key={todo.id} delete={props.delete}/>)}
            
        </ol>
    )
}

export default List;
