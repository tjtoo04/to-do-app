import ListItem from "@mui/material/ListItem";
import TextField from "@mui/material/TextField";
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import { InputAdornment } from '@mui/material';
import { IconButton } from "@mui/material";
import React, { useState } from "react";
import axios from 'axios'; 

interface TodoFormProps {
    addTodo: (text: string) => void;
}

export default function TodoForm({ addTodo }: TodoFormProps): JSX.Element {
    const [text, setText] = useState<string>('');

    const handleChange = (evt: React.ChangeEvent<HTMLInputElement>): void => {
        setText(evt.target.value);
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
        e.preventDefault();
        if (text.trim()) {
            try {
                const response = await axios.post('http://localhost:8000/api/task-create/', {
                    title: text,
                    completed: false
                });
                addTodo(response.data.title);
                setText(''); 
            } catch (error) {
                console.error('Error adding the task:', error);
            }
        }
    };

    return (
        <ListItem>
            <form onSubmit={handleSubmit}>
                <TextField
                    sx={{
                        width: '470px'
                    }}
                    color='warning'
                    id='outlined-basic'
                    label='add task'
                    variant='outlined'
                    onChange={handleChange}
                    value={text}
                    InputProps={{
                        endAdornment:
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="create todo"
                                    edge="end"
                                    type="submit"
                                >
                                    <CreateOutlinedIcon sx={{ color: '#eb5e28' }} />
                                </IconButton>
                            </InputAdornment>
                    }}
                />
            </form>
        </ListItem>
    );
}
