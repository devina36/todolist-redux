import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  { id: 1, name: 'dev' },
  { id: 2, name: 'hfjdfdg' },
  { id: 3, name: 'lets' },
];

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
});

export const selectAllUsers = (state) => state.users;

// export const { postAdded } = usersSlice.actions;

export default usersSlice.reducer;
