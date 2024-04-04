import { baseApi } from './base-api';
import { Freespin } from '../@types/entities/Freespin';

const freespinApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getFreespins: builder.query<Freespin[], void>({
      query: () => ({
        url: '/freespin',
        method: 'GET',
      }),
    }),
    createFreespin: builder.mutation<Freespin, Freespin>({
      query: (dto) => ({
        url: '/freespin',
        body: dto,
        method: 'POST'
      })
    }),
    deleteFreespin: builder.mutation<Freespin, any>({
      query: (id) => ({
        url: '/freespin/' + id,
        method: 'DELETE'
      })
    })
  }),
});

export const {
  useGetFreespinsQuery,
  useCreateFreespinMutation,
  useDeleteFreespinMutation
} = freespinApi;

export default freespinApi;
