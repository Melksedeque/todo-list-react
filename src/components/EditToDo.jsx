import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { TextField } from '@mui/material';

export default function EditToDo({open, dialogHandler, todo, editTodo, isLightTheme}) {
    const [editedText, setEditedText] = React.useState(todo.text);
    
    const textHandler = () => {
        editTodo(todo.id, editedText);
        dialogHandler();
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            textHandler();
        }
    };

    return (
        <Dialog
            open={open}
            onClose={dialogHandler}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            className={`${isLightTheme ? 'light-theme' : 'dark-theme'}`}
            fullWidth
        >
            <DialogTitle id="alert-dialog-title">
                {"Edit ToDo Item"}
            </DialogTitle>
            <DialogContent>
                <TextField
                    defaultValue={editedText}
                    onChange={(e) => setEditedText(e.target.value)}
                    onKeyDown={(e) => handleKeyDown(e)}
                    fullWidth
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={dialogHandler} className="dialog-button" size="large" variant="contained" color="error">Cancel</Button>
                <Button onClick={textHandler} className="dialog-button" size="large"  variant="contained" autoFocus>
                    Ok
                </Button>
            </DialogActions>
        </Dialog>
    );
}
