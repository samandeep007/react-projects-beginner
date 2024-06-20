import {configureStore} from '@reduxjs/toolkit'; //from core redux, not from react-redux --> never mutate your state
import todoReducer from '../features/todo/todoSlice';


export const store = configureStore({ //Single source of truth --> one store per application
    reducer: todoReducer //we pass here our reducer
})

