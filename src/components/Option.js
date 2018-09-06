import React from 'react'

const Option = (props) => {
    return(
        <div>
                {props.optionText}
                <button 
                    onClick={(e) =>{
                        props.handleDeleteOne(props.optionText)
                        
                        }
                    }        
                >
                X    
                </button>
        </div>
    );
}

export default Option;