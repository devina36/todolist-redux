import { createSlice, nanoid } from '@reduxjs/toolkit';

const items = JSON.parse(localStorage.getItem('todo')) || [];

const initialState = {
  todoList: items,
};

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      let newTodoList = {
        id: nanoid(),
        date: new Date().toISOString(),
        content: action.payload.newContent,
        done: false,
      };
      state.todoList.push(newTodoList);
      localStorage.setItem('todo', JSON.stringify(state.todoList));
    },
    deleteTodo: (state, action) => {
      state.todoList = state.todoList.filter((item) => item.id !== action.payload.id);
      localStorage.setItem('todo', JSON.stringify(state.todoList));
    },
    updateStatus: (state, action) => {
      console.log(action.payload.id);
      const itemIndex = state.todoList.findIndex((item) => item.id === action.payload.id);
      if (itemIndex >= 0) {
        state.todoList[itemIndex].done = !state.todoList[itemIndex].done;
        localStorage.setItem('todo', JSON.stringify(state.todoList));
      }
      state.todoList;
      localStorage.setItem('todo', JSON.stringify(state.todoList));
    },
    editTodo: (state, action) => {
      const itemIndex = state.todoList.findIndex((item) => item.id === action.payload.upId);
      if (itemIndex >= 0) {
        state.todoList[itemIndex].content = action.payload.upContent;
        localStorage.setItem('todo', JSON.stringify(state.todoList));
      }
      state.todoList;
      localStorage.setItem('todo', JSON.stringify(state.todoList));
    },
  },
});

export const getTodoList = (state) => state.todo.todoList;

export const { addTodo, deleteTodo, updateStatus, editTodo } = todoSlice.actions;

export default todoSlice.reducer;
