import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import ClearIcon from '@mui/icons-material/Clear';
import EditToDo from './EditToDo';

export default function ToDoItem({ todo, editTodo, deleteTodo }) {
    const [openEditDialog, setOpenEditDialog] = React.useState(false);
    const [isCompleted, setCompleted] = React.useState(false);
    
    const dialogHandler = () => {
        setOpenEditDialog(!openEditDialog);
    };
    
    const handleCompleteClick = () => {
        setCompleted(!isCompleted);
    };
    
    React.useEffect(() => {
        // Carregar o estado de conclusão do localStorage
        const savedIsCompleted = JSON.parse(localStorage.getItem(todo.id));
        if (savedIsCompleted !== null) {
            setCompleted(savedIsCompleted);
        }
    }, [todo.id]);
    
    React.useEffect(() => {
        // Salvar o estado de conclusão no localStorage
        localStorage.setItem(todo.id, JSON.stringify(isCompleted));
    }, [todo.id, isCompleted]);
    
    return (
        <li className={`item ${isCompleted ? 'completed' : ''}`} draggable="true">
            <EditToDo
                open={openEditDialog}
                dialogHandler={dialogHandler}
                todo={todo}
                editTodo={editTodo}
            />
            <button className="complete" onClick={handleCompleteClick}>
                <Checkbox edge="start" tabIndex={-1} disableRipple />
                <svg xmlns="http://www.w3.org/2000/svg" width="11" height="9">
                    <path fill="none" stroke="#FFF" strokeWidth="2" d="M1 4.304L3.696 7l6-6" />
                </svg>
            </button>
            <span className="title" onClick={() => setOpenEditDialog(true)}>
                {todo.text}
            </span>
            <button className="delete" onClick={() => deleteTodo(todo.id)}>
                <ClearIcon />
            </button>
        </li>
        );
    }
    