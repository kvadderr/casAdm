import { baseApi } from './base-api';
import { Card } from '../@types/entities/Card';

const cardApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getCards: builder.query<Card[], void>({
      query: () => ({
        url: '/card',
        method: 'GET',
      }),
    }),
    createCard: builder.mutation<Card, Card>({
      query: (dto) => ({
        url: '/card',
        body: dto,
        method: 'POST',
      }),
    }),
    deleteCard: builder.mutation<any, any>({
      query: (id) => ({
        url: `/card/${id}`,
        method: 'DELETE',
      }),
    })
  }),
});

export const {
  useGetCardsQuery,
  useCreateCardMutation,
  useDeleteCardMutation
} = cardApi;

export default cardApi;
