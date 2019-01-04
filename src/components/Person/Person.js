import React from 'react';

import './Person.css';

const person = (props) => {
    const { name, children, deletePersonHandler, nameChangeHandler } = props;

    return (
        <div className={"Person"} onClick={deletePersonHandler}>
            <p>Hello, I'm {name}</p>
            <input type={"text"} onChange={nameChangeHandler} value={name}/>
            {children}
        </div>
    );
};

export default person;