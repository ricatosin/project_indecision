import React from 'react';


export default class AddOptions extends React.Component{
    
    state = {
        error: undefined
    };
    handleAddOption = (e) => {
        e.preventDefault();
        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);

            //this.props.handleAddOption(option);
        this.setState(() => ({error}));
        if(!error){
            e.target.elements.option.value = ''; //if sucessfull send data clean inpit
        }
    }
    render(){

        return(
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                 <form onSubmit={this.handleAddOption} >
                    <input type="text" name="option"></input>
                    <button>Add</button>
                 
                 </form>
            </div>
        );
    }
}