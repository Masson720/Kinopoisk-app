// @ts-ignore
import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
import {API_TOKEN, API_URL} from "../constants/api";


export const kinopoiskAPI = createApi({
    reducerPath: "kinopoiskAPI",
    baseQuery: fetchBaseQuery({baseUrl: API_URL}),
    endpoints: (builder) => ({
        getTop: builder.query({
            query: ({query, filters, page}) => {
                return `movie?${filters.genre}&search[]=${filters.year}&field[]=year&search[]=${filters.rating}
                &field=rating.kp&${query}&sortField=year&sortType=${filters.sortByRelease}
                &limit=10&page${page}&token=${API_TOKEN}`
            }
        })
    })
})

export const {
    getTop
} = kinopoiskAPI.endpoints;

export const {
    useGetTop
} = kinopoiskAPI