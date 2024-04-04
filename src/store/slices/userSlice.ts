import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { User } from '../../@types/entities/User';
import usersApi from '../../api/users';

type UserState = {
  usersList: User[];
};

const slice = createSlice({
  name: 'user',
  initialState: {
  } as UserState,
  reducers: {
  
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(
        usersApi.endpoints.getUsers.matchFulfilled,
        (state, { payload }) => {
          state.usersList = payload;
        },
      )
      .addMatcher(
        usersApi.endpoints.populate.matchFulfilled,
        (state, { payload }) => {
          const index = state.usersList?.findIndex(user => user.id === payload.id);
          state.usersList[index] = payload;
        },
      )
  },
});

export const selectUsersList = (state: RootState): User[] =>
  state.userSlice.usersList;

export const {
} = slice.actions;

export default slice.reducer;
