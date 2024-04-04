import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { Game } from '../../@types/entities/Game';
import gameApi from '../../api/games';

type GameState = {
  gameList: Game[];
};

const slice = createSlice({
  name: 'game',
  initialState: {
  } as GameState,
  reducers: {
  
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(
        gameApi.endpoints.getGameList.matchFulfilled,
        (state, { payload }) => {
          state.gameList = payload;
        },
      )
  },
});

export const selectGamesList = (state: RootState): Game[] =>
  state.gameSlice.gameList;

export const {
} = slice.actions;

export default slice.reducer;
