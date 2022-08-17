
import {API_TOKEN, API_URL} from "@/constants/api";
import {getYear} from "@/helpers/helpers";
import {IFilmData} from "@/types/IFilmData";
import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
import {IReview} from "@/types/IReview";
import {IBaseQuery} from "@/types/IBaseTypes";
import {IPerson} from "@/types/IPerson";
import {IFilmsData} from "@/types/IFilmsData";


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
        }),
        getFilmsById: build.query<IFilmsData, IBaseQuery>({
            query: ({query, limit}) => {
                return `/movie?${query}&limit=${limit}&token=${API_TOKEN}`
            }
        }),
        getFilmsBySearch: build.query({
            query: ({filters}) => {
                return `/movie?field=rating.kp&search=${filters.rating}&field=year&search=${filters.year}&sortType=${filters.sortByRelease}&token=${API_TOKEN}`
            }
        }),
        getPersonById: build.query<IPerson, string | Array<string> | undefined>({
            query: id => {
                return `/person?search=${id}&field=id&token=${API_TOKEN}`
            }
        }),
        getReviewById: build.query<IReview, IBaseQuery>({
            query: ({id, limit}) => {
                return `review?search=${id}&field=movieId&limit=${limit}&token=${API_TOKEN}`
            }
        }),
    })
})

export const {
    getTop,
    getFilmById,
    getReviewById
} = kinopoiskAPI.endpoints;

export const {
    useGetTopQuery,
    useGetFilmByIdQuery,
    useGetFilmsByIdQuery,
    useGetFilmsBySearchQuery,
    useGetPersonByIdQuery,
    useGetReviewByIdQuery
} = kinopoiskAPI;