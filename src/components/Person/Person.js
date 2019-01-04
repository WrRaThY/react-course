import React from 'react';
import Radium from 'radium';

import './Person.css';

const person = (props) => {
    const { name, children, deletePersonHandler, nameChangeHandler } = props;

    const style = {
        '@media(min-width: 500px)': {
            width: '450px'
        }
    };

    return (
        <div className={"Person"} onClick={deletePersonHandler} style={style}>
            <p>Hello, I'm {name}</p>
            <input type={"text"} onChange={nameChangeHandler} value={name} />
            {children}
        </div>
    );
};

export default Radium(person);