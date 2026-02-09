import React, {Component} from 'react';
import {View, ScrollView, StyleSheet, Button, TouchableOpacity, Text, Keyboard} from 'react-native';
import Input from './Input';
import Heading from './Heading';


class App extends Component {
    constructor() {
        super();
        this.state = {
            inputValue: '',
            todos: [],
            type: 'All',
        };
    };

    inputChange(inputValue) {
        console.log(' Input Value: ', inputValue);
        this.setState({inputValue});
    };
    
    handleSubmit = () => {
        const { inputValue, todos } = this.state;
        if (!inputValue.trim()) return; 

        const newTodo = { text: inputValue };
        console.log('Adding todo:', newTodo);

        this.setState({
            todos: [...todos, newTodo],
            inputValue: '', 
        });

        Keyboard.dismiss();
    };

    render() {
        const {inputValue, todos} = this.state;

        return (
            <View style={styles.container}>
                <ScrollView keyboardShouldPersistTaps="always" style={styles.content}>
                    <Heading />
                    <Input
                        inputValue={inputValue}
                        inputChange={text => this.inputChange(text)}
                    />

            <View style={styles.todoList}>
                {todos.map((todo, index) => (
                    <View key={index} style={styles.todoItem}>
                        <Text>{todo.text}</Text>
                    </View>
                ))}
            </View>

            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={this.handleSubmit}>
                    <Text style={styles.buttonText}>Submit</Text>
                </TouchableOpacity>
            </View>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },

    content: {
        flex: 1,
        paddingTop: 60,
    },

    buttonContainer: {
    marginTop: 10,
    width: 'auto',
    marginLeft: 20,
    marginRight: 20,
    alignSelf: 'flex-end',
    },

    button: {
    backgroundColor: '#ffffff', 
    paddingVertical: 15,
    shadowOpacity: 0.1,
    marginTop: 10,
    },

    buttonText: {
    color: '#000000',
    fontSize: 14,
    fontWeight: 'normal',
    marginRight: 100,
    marginLeft: 100,
    },

    todoList: {
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
    },

    todoItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    },

});

export default App;

