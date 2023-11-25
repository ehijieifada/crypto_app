import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


const cryptoApiHeaders = {
  'X-RapidAPI-Key': process.env.REACT_APP_RAPIDAPI_KEY,
  'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'

};


export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://coinranking1.p.rapidapi.com', headers: cryptoApiHeaders }),
    endpoints: (builder) => ({
      getCryptos: builder.query({
        query: (count) => (`/coins?limit=${count}`),
      }),
      getCryptoDetails: builder.query({
        query: (uuid) => (`coin/${uuid}`),
      }),
      getCryptoHistory: builder.query({
        query: ({ coinId, timeperiod }) => (`coin/${coinId}/history?timeperiod=${timeperiod}`),
      }),
    }),
});
  
export const {useGetCryptosQuery,useGetCryptoDetailsQuery, useGetCryptoHistoryQuery, } = cryptoApi;


  

