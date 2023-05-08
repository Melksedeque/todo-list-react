import React, { useState } from 'react'

export default function Form({addTodo}) {
    const [id, setId] = useState(1);
    const [text, setText] = useState(null);
    
    const todoCreate = (text) => {
        const todoObj = {id: id, text: text};

        if (!text) {
            return;
        }

        setId(id + 1);
        addTodo(todoObj);
        document.getElementById('input_new_todo').value = '';
    }

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            todoCreate(text);
        }
    };

    return (
        <>
        <section className="new-todo d-flex align-content-center align-items-center">
            <div className="mark">
                <label className="circle" for="input_new_todo"></label>
            </div>
            <div class="label">
                <input
                    type="text"
                    name="input_new_todo"
                    id="input_new_todo"
                    placeholder="Create a new todo..."
                    onChange={(e) => setText(e.target.value)}
                    onKeyDown={(e) => handleKeyDown(e)}
                />
            </div>
        </section>
        <div class="error-info text-danger" style={{display: "none"}}>This field can't be empty</div>
        </>
    )
}
