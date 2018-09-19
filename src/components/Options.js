import React from 'react';
import Option from './Option';


const Options = (props) => (
    <div>
         
    <button onClick={props.handleDeleteOptions}> Remove All </button>
    {

        //this.props.options.map((valor) => <p key={valor}>{valor}</p>)
        props.options.map((option) => (
            <Option 
            key={option}  
            optionText={option} 
            handleDeleteOne = {props.handleDeleteOne}
            />
        
        
        ))
        
    }
    </div>
)    
export default Options;