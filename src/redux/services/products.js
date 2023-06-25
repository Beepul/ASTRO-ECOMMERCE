import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const productsApi = createApi({
    reducerPath: 'productApi',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:3000/api/'}),
    tagTypes:['Product'],
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: ({category="",price=[],sort="",order="",page=1,limit=10,rating=0,...params}) =>{
                let queryString = 'products';
                let queryParams = [];
                // console.log("from store",{rating})
                if(category){
                    queryParams.push(`category=${category}`);
                }
                if(sort && order){
                    queryParams.push(`sort=${sort}&order=${order}`);
                }
                if(page && limit){
                    queryParams.push(`page=${page}&limit=${limit}`)
                }
                if(price.length > 0){
                    queryParams.push(`price=${price[0]}-${price[1]}`)
                }
                if(rating){
                    queryParams.push(`rating=${rating}`)
                }
                
                if(queryParams.length > 0){
                    queryString += `?${queryParams.join("&")}`;
                }
                // console.log("here",queryString)
                return queryString;
            } ,
            providesTags: ['Product']
        }),
        createProduct: builder.mutation({
            query: (product) => ({
                url: 'products',
                method: 'POST',
                body: product
            }),
            invalidatesTags: ['Product'],
            onQueryFulfilled: (response, { dispatch }) => {
                dispatch(productsApi.util.updateQueryData('getProducts', undefined, (draftProducts) => {
                  draftProducts?.push(response.data);
                }));
              }
        }),
        getProduct: builder.query({
            query: (id) => `products/${id}`
        }),
        deleteProduct: builder.mutation({
            query: (id) => ({
                url:`products/${id}`,
                method: 'DELETE'
            }),
            invalidatesTags: ['Product'],
            onQueryFulfilled: (response, { dispatch, queryFulfilled }) => {
                queryFulfilled.then(() => {
                  dispatch(productsApi.util.updateQueryData('getProducts', undefined, (draftProducts) => {
                    return draftProducts?.filter((product) => product?._id !== id);
                  }));
                });
              }
        }),
        updateProduct: builder.mutation({
            query: ({id,body,...params}) => ({
                url: `products/${id}`,
                method: 'PATCH',
                body: body
            }),
            invalidatesTags: ['Product'],
            onQueryStarted: ({ id, body, ...params }, { dispatch, queryFulfilled }) => {
                queryFulfilled.then((response) => {
                  const updatedProduct = response.data;
                  dispatch(
                    productsApi.util.updateQueryData('getProducts', undefined, (draftProducts) => {
                      const index = draftProducts?.findIndex((product) => product?._id === id);
                      if (index !== -1) {
                        draftProducts[index] = updatedProduct;
                      }
                    })
                  );
                });
              }
        })
    })
})

export const { useGetProductsQuery, useCreateProductMutation, useGetProductQuery, useDeleteProductMutation,useUpdateProductMutation } = productsApi