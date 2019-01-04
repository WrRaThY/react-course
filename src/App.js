import React, { Component } from 'react';

import Person from "./components/Person/Person";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary"

import styles from './App.module.scss';

class App extends Component {
    state = {
        persons: [
            {
                id: 'asdasd1',
                name: 'Max'
            },
            {
                id: 'asdasd2',
                name: 'Dax'
            },
            {
                id: 'asdasd3',
                name: 'Hax'
            }
        ],
        showPersons: true
    };

    render () {
        return (
            <div className={styles.App}>
                <button onClick={this.addPersonHandler}>Add a person</button>
                <button onClick={this.togglePersonsHandler} className={this.dynamicClassesButton()}>Toggle persons</button>
                <p className={this.dynamicClassesExample()}>dynamic classes example</p>
                {this.renderPersons()}
            </div>
        );
    }

    dynamicClassesButton () {
        if (this.state.showPersons) {
            return styles.red;
        }

        return styles.green;
    }

    dynamicClassesExample () {
        const classes = [];
        if (this.state.persons.length <= 2) {
            classes.push('red')
        }
        if (this.state.persons.length <= 1) {
            classes.push('bold')
        }
        return classes.join(' ');
    }

    renderPersons () {
        if (this.state.showPersons) {
            return this.state.persons.map((el, index) => {
                return (
                    <ErrorBoundary key={el.id}>
                        <Person
                            name={el.name}
                            deletePersonHandler={this.deletePersonHandler.bind(this, index)}
                            nameChangeHandler={this.nameChangeHandler.bind(this, el.id)}
                        />
                    </ErrorBoundary>
                );
            })
        }

        return null;
    }

    togglePersonsHandler = () => {
        this.setState({
            showPersons: !this.state.showPersons
        })
    };

    addPersonHandler = (event) => {
        console.log('add person handler event: ', event);
        this.setState({
            persons: [...this.state.persons, { name: 'Hax2' }]
        });
    };

    nameChangeHandler = (id, event) => {
        const personIndex = this.state.persons.findIndex(p => p.id === id);
        const person = { ...this.state.persons[personIndex] };
        person.name = event.target.value;

        const persons = [...this.state.persons];
        persons[personIndex] = person;

        this.setState({ persons: persons });
    };

    deletePersonHandler = (index, event) => {
        const persons = [...this.state.persons];
        persons.splice(index, 1);

        this.setState({
            persons: persons
        });
    };
}

export default App;
