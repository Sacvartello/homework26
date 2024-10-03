import React, { Component } from 'react';
import '../style.css'
class Form extends Component {
    constructor(props) {
        super(props)
        this.state={
            todo:''
        }
    }
    submitHandler=(event)=>{
        event.preventDefault()
        if(this.state.todo){
        this.props.callback(this.state)
        }
        this.setState({
            todo:''
        })
    }
    changeHandler=({target:{name, value}})=>{
        this.setState({
            [name]:value
        })
    }
    render() {
        return (
            <form className='form' onSubmit={this.submitHandler}>
                <input 
                onChange={this.changeHandler} 
                type='name' 
                name='todo' 
                value={this.state.todo}/>
                <button>Додати завдання</button>
            </form>
        );
    }
}

export default Form;
