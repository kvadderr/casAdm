import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { Card } from '../../@types/entities/Card';
import cardApi from '../../api/card';

type LogState = {
  cards: Card[];
};

const slice = createSlice({
  name: 'logs',
  initialState: {
    cards: []
  } as LogState,
  reducers: {
  
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(
        cardApi.endpoints.getCards.matchFulfilled,
        (state, { payload }) => {
          state.cards = payload;
        },
      )
      .addMatcher(
        cardApi.endpoints.createCard.matchFulfilled,
        (state, { payload }) => {
          console.log(payload)
          state.cards.push(payload);
        },
      )
      .addMatcher(
        cardApi.endpoints.deleteCard.matchFulfilled,
        (state, { payload }) => {
          state.cards = state.cards.filter(card => card.id !== payload.id);
        }
      )
  },
});

export const selectCards = (state: RootState): Card[] =>
  state.cardSlice.cards;

export const {
} = slice.actions;

export default slice.reducer;
