import React , {Component}from 'react';

class AddTodo extends Component{
    state = {
        text : ''
    }

    handleChange = (e)=>
    {
        this.setState({
            text : e.target.value
        })
    }

    handleSubmit = (e)=>{
        e.preventDefault();
        this.props.addtodo(this.state);
        this.setState({
            text:''
        })
    }

    render(){
        return(
            <div>
                <form onSubmit = {this.handleSubmit}>
                    <label>Add New Todo</label>
                    <input type = 'text' onChange = {this.handleChange} value = {this.state.text} />
                </form>
            </div>
        )
    }
}

export default AddTodo;