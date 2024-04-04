import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { Freespin } from '../../@types/entities/Freespin';
import freespinApi from '../../api/freespin';

type FreespinState = {
  freespinsList: Freespin[];
};

const slice = createSlice({
  name: 'freespin',
  initialState: {
  } as FreespinState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder
      .addMatcher(
        freespinApi.endpoints.getFreespins.matchFulfilled,
        (state, { payload }) => {
          state.freespinsList = payload;
        },
      )
      .addMatcher(
        freespinApi.endpoints.createFreespin.matchFulfilled,
        (state, { payload }) => {
          state.freespinsList.push(payload)
        }
      )
      .addMatcher(
        freespinApi.endpoints.deleteFreespin.matchFulfilled,
        (state, { payload }) => {
          state.freespinsList = state.freespinsList.filter(freespin => freespin.id !== payload.id);
        }
      )
  },
});

export const selectFreespinsList = (state: RootState): Freespin[] =>
  state.freespinSlice.freespinsList;

export const {
} = slice.actions;

export default slice.reducer;
