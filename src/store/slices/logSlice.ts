import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { Game } from '../../@types/entities/Game';
import gameApi from '../../api/games';
import { Logs } from '../../@types/entities/Logs';
import logApi from '../../api/logs';

type LogState = {
  gameLogs: Logs[];
};

const slice = createSlice({
  name: 'logs',
  initialState: {
  } as LogState,
  reducers: {
  
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(
        logApi.endpoints.getLogs.matchFulfilled,
        (state, { payload }) => {
          state.gameLogs = payload;
        },
      )
  },
});

export const selectLogList = (state: RootState): Logs[] =>
  state.logSlice.gameLogs;

export const {
} = slice.actions;

export default slice.reducer;
