import React from 'react'

const Action = (props) => {
    return(
     <div>
        <button onClick={props.handlePick}> Button </button>
     </div>
    );  
};

export default Action;