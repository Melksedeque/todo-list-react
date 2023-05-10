import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import ClearIcon from '@mui/icons-material/Clear';
import EditToDo from './EditToDo';

export default function ToDoItem({todo, editTodo, deleteTodo}) {
    const [openEditDialog, setOpenEditDialog] = React.useState(false)

    const dialogHandler = () => {
        setOpenEditDialog(!openEditDialog);
    }
  
    return (
    <li className="item" draggable="true">
        <EditToDo
            open={openEditDialog}
            dialogHandler={dialogHandler}
            todo={todo}
            editTodo={editTodo}
        />
        <button className="complete">
            <Checkbox
                edge="start"
                tabIndex={-1}
                disableRipple
            />
        </button>
        <span className="title" onClick={() => setOpenEditDialog(true)}>{todo.text}</span>
        <button className="delete" onClick={ () => deleteTodo(todo.id) }>
            <ClearIcon />
        </button>
    </li>
    );
}
