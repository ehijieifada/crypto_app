import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseUrl = 'https://cryptocurrency-news2.p.rapidapi.com/v1';

const createRequest = (url) => ({
  url,
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_NEWS_RAPIDAPI_KEY,
    'X-RapidAPI-Host': 'cryptocurrency-news2.p.rapidapi.com',
  },
});

export const cryptoNewsApi = createApi({
  reducerPath: 'cryptoNewsApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptoNews: builder.query({
      query: () => createRequest('/cryptodaily'),
    }),
  }),
});

export const { useGetCryptoNewsQuery } = cryptoNewsApi;
