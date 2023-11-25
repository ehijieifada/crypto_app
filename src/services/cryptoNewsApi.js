import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoNewsHeaders = {
  'X-RapidAPI-Key': process.env.REACT_APP_NEWS_RAPIDAPI_KEY,
  'X-RapidAPI-Host': 'cryptocurrency-news2.p.rapidapi.com'
};

export const cryptoNewsApi = createApi({
  reducerPath: 'cryptoNewsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://cryptocurrency-news2.p.rapidapi.com/v1', headers: cryptoNewsHeaders}),
  endpoints: (builder) => ({
    getCryptoNews: builder.query({
      query: () => (`/coindesk`)
    }),
  }), 
});
export const { useGetCryptoNewsQuery } = cryptoNewsApi;
