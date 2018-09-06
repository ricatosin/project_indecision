import React from 'react'


// HEADER COMPONENT

const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            <h2>{props.subtitle}</h2>
        </div>    
    );
};


//HEADER DEFAUL COMPONENT CASE NO TITLE IS DEFINED OR ANY OTHER THING
Header.defaultProps = {
    title: 'Indecision'
}

export default Header;