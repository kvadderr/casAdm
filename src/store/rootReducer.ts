import { combineReducers } from 'redux';

import gameApi from '../api/games';
import userApi from '../api/users';
import logApi from '../api/logs';

import gameSlice from './slices/gameSlice';
import userSlice from './slices/userSlice';
import freespinApi from '../api/freespin';
import freespinSlice from './slices/freespinSlice';
import logSlice from './slices/logSlice';
import cardApi from '../api/card';
import cardSlice from './slices/cardSlice';

export const rootReducer = combineReducers({
  [gameApi.reducerPath]: gameApi.reducer,
  [userApi.reducerPath]: userApi.reducer,
  [logApi.reducerPath]: logApi.reducer,
  [freespinApi.reducerPath]: freespinApi.reducer,
  [cardApi.reducerPath]: cardApi.reducer,
  freespinSlice: freespinSlice,
  gameSlice: gameSlice,
  userSlice: userSlice,
  logSlice: logSlice,
  cardSlice: cardSlice

});
