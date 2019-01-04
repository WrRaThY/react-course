import React from 'react';

import styles from './Person.module.scss';

const person = (props) => {
    const { name, children, deletePersonHandler, nameChangeHandler } = props;

    const number = Math.random() * 100;
    if (number > 70){
        throw new Error('that sucks');
    }

    return (
        <div className={styles.Person} onClick={deletePersonHandler}>
            <p>Hello, I'm {name}</p>
            <input type={"text"} onChange={nameChangeHandler} value={name} />
            {children}
        </div>
    );
};

export default person;