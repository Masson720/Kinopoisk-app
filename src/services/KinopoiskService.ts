
import {API_TOKEN, API_URL} from "@/constants/api";
import {getYear} from "@/helpers/helpers";
import {IFilmData} from "@/types/IFilmData";
import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";


export const kinopoiskAPI = createApi({
    reducerPath: "kinopoiskAPI",
    baseQuery: fetchBaseQuery({baseUrl: API_URL}),
    endpoints: (build) => ({
        getTop: build.query({
            query: limit => {
                return `/movie?field=rating.kp&search=1-10&field=year&search=${getYear()}&field=typeNumber&search=1&limit=${limit}&sortField=year&sortType=1&sortField=votes.imdb&sortType=-1&token=${API_TOKEN}`
            }
        }),
        getFilmById: build.query<IFilmData, string | Array<string> | undefined>({
            query: id => {
                return `/movie?search=${id}&field=id&token=${API_TOKEN}`
            }
        })
    })
})

export const {
    getTop,
    getFilmById
} = kinopoiskAPI.endpoints;

export const {
    useGetTopQuery,
    useGetFilmByIdQuery
} = kinopoiskAPI;