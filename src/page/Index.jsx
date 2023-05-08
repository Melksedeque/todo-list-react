import React, { useState, useEffect } from 'react'
import Form from '../components/Form';
import ToDoItem from '../components/ToDoItem';
import { Container, List } from '@mui/material';

export default function Index() {
    const [todos, setTodos] = useState([]);
    const [isLightTheme, setIsLightTheme] = useState(true);
    const [dataLoaded, setDataLoaded] = useState(false);

    const toggleTheme = () => {
        setIsLightTheme(!isLightTheme);
    }

    const addTodo = (todo) => {
        setTodos([...todos, todo])
    }

    const deleteTodo = (id) => {
        let newList = todos.filter((todo) => todo.id !== id);
        setTodos(newList);
    }

    const editTodo = (id, editedText) => {
        let todosArray = [...todos];
        for (let i in todosArray) {
            if(todosArray[i].id === id) {
                todosArray[i].text = editedText;
            }
        }
        setTodos(todosArray);
    }

    useEffect(() => {
        const storedTodos = localStorage.getItem('todos');
        if (storedTodos) {
            setTodos(JSON.parse(storedTodos));
            setDataLoaded(true);
        }
    }, []);

    useEffect(() => {
        if (dataLoaded) {
            localStorage.setItem('todos', JSON.stringify(todos));
        }
    }, [todos]);


    return (
        <>
        <main id="page" className={`${isLightTheme ? 'light-theme' : 'dark-theme'}`}>
            <div className="container container-app">
                <header className="top d-flex justify-content-between align-content-center align-items-center">
                    <h1>TODO</h1>
                    <div class="theme-buttons">
                        <button type="button" class="button-light" onClick={toggleTheme} style={{ display: isLightTheme ? "block" : "none" }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26"><path fill="#FFF" fillRule="evenodd" d="M13 0c.81 0 1.603.074 2.373.216C10.593 1.199 7 5.43 7 10.5 7 16.299 11.701 21 17.5 21c2.996 0 5.7-1.255 7.613-3.268C23.22 22.572 18.51 26 13 26 5.82 26 0 20.18 0 13S5.82 0 13 0z"/></svg>
                        </button>
                        <button type="button" className="button-dark" onClick={toggleTheme} style={{ display: isLightTheme ? "none" : "block" }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26"><path fill="#FFF" fillRule="evenodd" d="M13 21a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1zm-5.657-2.343a1 1 0 010 1.414l-2.121 2.121a1 1 0 01-1.414-1.414l2.12-2.121a1 1 0 011.415 0zm12.728 0l2.121 2.121a1 1 0 01-1.414 1.414l-2.121-2.12a1 1 0 011.414-1.415zM13 8a5 5 0 110 10 5 5 0 010-10zm12 4a1 1 0 110 2h-3a1 1 0 110-2h3zM4 12a1 1 0 110 2H1a1 1 0 110-2h3zm18.192-8.192a1 1 0 010 1.414l-2.12 2.121a1 1 0 01-1.415-1.414l2.121-2.121a1 1 0 011.414 0zm-16.97 0l2.121 2.12A1 1 0 015.93 7.344L3.808 5.222a1 1 0 011.414-1.414zM13 0a1 1 0 011 1v3a1 1 0 11-2 0V1a1 1 0 011-1z"/></svg>
                        </button>
                    </div>
                </header>

                <Container style={{ marginTop: "1em", padding: 0 }}>
                    <Form addTodo={addTodo} onSubmit={addTodo} />
                    <List sx={{ marginTop: "1em" }}>
                        {todos.map((todo) => (
                            <div key={todo.id} style={{ marginTop: "1em" }}>
                                <ToDoItem
                                    todo={todo}
                                    editTodo={editTodo}
                                    deleteTodo={deleteTodo}
                                />
                            </div>
                        ))}            
                    </List>
                </Container>
            </div>
        </main>
        </>
    )
}