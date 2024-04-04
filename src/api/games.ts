import { baseApi } from './base-api';
import { Game } from '../@types/entities/Game';

const gameApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getGameList: builder.query<Game[], void>({
      query: () => ({
        url: '/games',
        method: 'GET',
      }),
    }),
    getGameLink: builder.mutation<any, any>({
      query: (dto) => ({
        url: '/games/gameLink',
        body: dto,
        method: 'POST',
      }),
    }),
  }),
});

export const {
  useGetGameListQuery,
  useGetGameLinkMutation
} = gameApi;

export default gameApi;
