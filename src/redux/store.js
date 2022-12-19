import { configureStore } from '@reduxjs/toolkit';
// import postsReducer from './features/posts/postsSlice';
// import usersReducer from './features/users/usersSlice';
import todoReducer from './todoSlice';

export const store = configureStore({
  reducer: {
    // posts: postsReducer,
    // users: usersReducer,
    todo: todoReducer,
  },
});
