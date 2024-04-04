import { combineReducers } from 'redux';

import gameApi from '../api/games';
import userApi from '../api/users';

import gameSlice from './slices/gameSlice';
import userSlice from './slices/userSlice';
import freespinApi from '../api/freespin';
import freespinSlice from './slices/freespinSlice';

export const rootReducer = combineReducers({
  [gameApi.reducerPath]: gameApi.reducer,
  [userApi.reducerPath]: userApi.reducer,
  [freespinApi.reducerPath]: freespinApi.reducer,
  freespinSlice: freespinSlice,
  gameSlice: gameSlice,
  userSlice: userSlice

});
