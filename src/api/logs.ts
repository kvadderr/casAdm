import { baseApi } from './base-api';
import { Logs } from '../@types/entities/Logs';

const logApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getLogs: builder.query<Logs[], void>({
      query: () => ({
        url: '/game-history',
        method: 'GET',
      }),
    })
  }),
});

export const {
  useGetLogsQuery
} = logApi;

export default logApi;
