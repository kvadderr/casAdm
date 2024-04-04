import { baseApi } from './base-api';
import { User } from '../@types/entities/User';
import { PopulateBalanceDto } from '../@types/dto/populateBalance.dto';

const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query<User[], void>({
      query: () => ({
        url: '/user',
        method: 'GET',
      }),
    }),
    populate: builder.mutation<User, PopulateBalanceDto>({
      query: (dto) => ({
        url: '/user/populate',
        body: dto,
        method: 'POST',
      }),
    }),
  }),
});

export const {
  useGetUsersQuery,
  usePopulateMutation
} = userApi;

export default userApi;
