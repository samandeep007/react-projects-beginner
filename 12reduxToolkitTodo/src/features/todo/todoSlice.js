import {createSlice, nanoid} from '@reduxjs/toolkit'; //nanoid generates unique ids 

const initialState = {
    todos: [{id: 1, text: "Hello world"}]
}

//slice is the superset of reducer
export const todoSlice = createSlice({ //feature is called slice
    name: 'todo', // name of the slice
    initialState: initialState, // initial state of the slice
    reducers: {
        addTodo: (state, action) => { 
            const todo = {
                id: nanoid(), //nanoid generates unique ids
                text: action.payload //payload is an object that contains the data that is being sent to the reducer
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload);
        },
        updateTodo: (state, action) => {
            state.todos = state.todos.map(todo => todo.id === action.payload.id ? {...todo, text: action.payload.text } : todo);
        }
    }
});

export const {addTodo, removeTodo, updateTodo} = todoSlice.actions
export default todoSlice.reducer;


