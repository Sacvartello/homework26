import React, { Component } from 'react';
import Form from '../Form';
import List from '../List';
import '../style.css'
class ToDoPage extends Component {
    constructor(props) {
        super(props)
        this.state={
            list:[]
        }
        this.count = 0
    }
    getNewItem=({todo})=>{
        const newItem= {
            body:todo,
            id:this.count++
        }
        const newList = [...this.state.list, newItem]
        this.setState({
            list: newList
        })
    }
    deleteItem=(id)=>{
        const filtered = this.state.list.filter(elem=> elem.id !== id)
        this.setState({
            list:filtered
        })
    }
    render() {
        return (
            <div className='page'>
                <Form callback={this.getNewItem}/>
                <List list={this.state.list} delete={this.deleteItem}/>
            </div>
        );
    }
}

export default ToDoPage;
