import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const ordersApi = createApi({
    reducerPath: 'ordersApi',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:3000/api'}),
    endpoints: (builder) => ({
        createOrder: builder.mutation({
            query: (payload) =>({
                url:'/orders',
                method: 'POST',
                body: payload,
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                }

            })
    })
    })
})

export const { useCreateOrderMutation  } = ordersApi