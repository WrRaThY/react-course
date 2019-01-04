import React, { Component } from 'react';

import Person from "./components/Person/Person";

import './App.css';

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
                <div className="App">
                    <button key={'addButton'} onClick={this.addPersonHandler} style={this.dynamicStyle()}>Add a person</button>
                    <button key={'toggleButton'} onClick={this.togglePersonsHandler} style={this.dynamicStyle()}>Toggle persons</button>
                    <p className={this.dynamicClasses()}>dynamic classes example</p>
                    {this.renderPersons()}
                </div>
        );
    }

    dynamicStyle () {
        const style = {
            color: 'white',
            backgroundColor: 'green',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer',
            margin: '5px',
            ':hover': {
                backgroundColor: 'lightgreen',
                color: 'black'
            }
        };

        if (this.state.showPersons) {
            style.backgroundColor = 'red';
            style[':hover'] = {
                backgroundColor: 'salmon',
                color: 'black'
            }
        }

        return style;
    }

    dynamicClasses () {
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
                    <Person
                        key={el.id}
                        name={el.name}
                        deletePersonHandler={this.deletePersonHandler.bind(this, index)}
                        nameChangeHandler={this.nameChangeHandler.bind(this, el.id)}
                    />
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
