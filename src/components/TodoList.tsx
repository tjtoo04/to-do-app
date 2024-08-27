import List from '@mui/material/List';
import { useState, useEffect } from 'react';
import TodoItem from './TodoItem';
import TodoForm from './TodoForm';
import { Box, Typography, createTheme, ThemeProvider } from '@mui/material';
import FilterBtn from './FilterBtn';

const theme = createTheme({
    typography: {
        fontFamily: [
            'Montserrat',
            'sans-serif',
        ].join(','),
    },
});

const styles = {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    m: 3,
    backgroundColor: 'white',
    paddingBottom: '40px',
    margin: '3rem 0 3rem 0',
    padding: '1rem',
    position: 'relative',
    webkitBoxShadow: '0px 15px 0px -5px #ef8257, 0px 30px 0px -10px #f39e7c, 5px 5px 15px 5px rgba(0,0,0,0)', 
    boxShadow: '0px 14px 0px -5px #ef8257, 0px 28px 0px -10px #f39e7c, 5px 5px 15px 5px rgba(0,0,0,0)',
    border: '2px solid #252422',
    maxWidth: '38rem',
    marginLeft: 'auto',
    marginRight: 'auto'
};

interface Todo {
    id: string;
    text: string;
    completed: boolean;
}

const FILTER_MAP: { [key: string]: (todo: Todo) => boolean } = {
    All: () => true,
    Active: (todo) => !todo.completed,
    Completed: (todo) => todo.completed
};

const FILTER_NAMES = Object.keys(FILTER_MAP);

interface TodoListProps {
    tasks: Todo[];
}

export default function TodoList({ tasks }: TodoListProps): JSX.Element {
    const [todos, setTodos] = useState<Todo[]>(tasks);
    const [filter, setFilter] = useState<string>('All');

    const filterList = FILTER_NAMES.map((name) => (
        <FilterBtn 
            key={name}
            name={name}
            isPressed={name === filter}
            setFilter={setFilter}
        />
    ));

    useEffect(() => {
        setTodos(tasks); 
    }, [tasks]);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    const removeTodo = (id: number | string): void => {
        setTodos((prevTodos) => prevTodos.filter((t) => t.id !== id));
    };

    const toggleTodo = (id: string): void => {
        setTodos((prevTodos) => {
            return prevTodos.map((todo) => {
                if (todo.id === id) {
                    return { ...todo, completed: !todo.completed };
                } else {
                    return todo;
                }
            });
        });
    };

    const addTodo = (text: string): void => {
        setTodos((prevTodos) => [
            ...prevTodos,
            { text, id: crypto.randomUUID(), completed: false }
        ]);
    };

    const taskList = todos
        .filter(FILTER_MAP[filter])
        .map((todo) => (
            <TodoItem 
                todo={todo}
                key={todo.id}
                remove={removeTodo}
                toggle={() => toggleTodo(todo.id)}
            />
        ));

    return (
        <ThemeProvider theme={theme}>
            <Box className='TodoList' sx={styles}>
                <List 
                    sx={{
                        width: '100%', 
                        maxWidth: 500, 
                        bgcolor: 'background.paper',
                        fontFamily: 'inherit'
                    }}
                >
                    <Typography 
                        variant='h5' 
                        component='h4'
                        sx={{
                            color: '#eb5e28',
                            paddingBottom: '10px',
                            fontWeight: '500',
                            textAlign: 'center'
                        }}    
                    >
                        what&apos;s on the docket for today? 
                    </Typography>
                    <TodoForm addTodo={addTodo} />
                    {taskList}
                    <Typography 
                        variant='h5'
                        component='h5'
                        sx={{
                            display: 'flex',
                            marginTop: '10px',
                            justifyContent: 'space-between'
                        }}
                    >
                        {taskList.length} task{taskList.length !== 1 && 's'} left
                        <span>
                            {filterList}
                        </span>
                    </Typography>
                </List>
            </Box>
            <h5 style={{textAlign: 'center', fontWeight: 100, fontSize: '1rem'}}>
                made by cindy
            </h5>
        </ThemeProvider>
    );
}
