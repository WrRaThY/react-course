import React from 'react';

import './Person.css';

const person = (props) => {
    const { name, children, deleteHandler, nameChangeHandler } = props;

    return (
        <div className={"Person"} onClick={deleteHandler}>
            <p>Hello, I'm {name}</p>
            <input type={"text"} onChange={nameChangeHandler} value={name}/>
            {children}
        </div>
    );
};

export default person;