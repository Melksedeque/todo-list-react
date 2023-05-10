import * as React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import ClearIcon from '@mui/icons-material/Clear';
import { Paper } from '@mui/material';
import EditToDo from './EditToDo';

export default function ToDoItem({todo, editTodo, deleteTodo}) {
    const [openEditDialog, setOpenEditDialog] = React.useState(false)

    const dialogHandler = () => {
        setOpenEditDialog(!openEditDialog);
    }
  
    return (
    <li className="item">
        <EditToDo
            open={openEditDialog}
            dialogHandler={dialogHandler}
            todo={todo}
            editTodo={editTodo}
        />
        <ListItem style={{padding: 0}}
            secondaryAction={
                <IconButton
                    edge="end"
                    aria-label="delete"
                    onClick={ () => deleteTodo(todo.id) }
                >
                    <ClearIcon />
                </IconButton>
            }
            disablePadding
            >
            <ListItemButton role={undefined} dense>
                <ListItemIcon>
                    <Checkbox
                        edge="start"
                        tabIndex={-1}
                        disableRipple
                        />
                </ListItemIcon>
                <ListItemText
                    primary={todo.text}
                    onClick={() => setOpenEditDialog(true)}
                />
            </ListItemButton>
        </ListItem>
    </li>
    );
}
