import {API_URL} from "@/constants/api";
import {getToken, getYear} from "@/helpers/helpers";
import {IFilmData} from "@/types/IFilmData";
import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
import {IReview} from "@/types/IReview";
import {IBaseQuery, IQuery} from "@/types/IBaseTypes";
import {IPerson} from "@/types/IPerson";
import {IFilmsData} from "@/types/IFilmsData";
import {IPersons} from "@/types/IPersons";


export const kinopoiskAPI = createApi({
    reducerPath: "kinopoiskAPI",
    baseQuery: fetchBaseQuery({baseUrl: API_URL}),
    endpoints: (build) => ({
        getTop: build.query({
            query: limit => {
                return `/movie?field=rating.kp&search=1-10&field=year&search=${getYear()}&field=typeNumber&search=1&limit=${limit}&sortField=year&sortType=1&sortField=votes.imdb&sortType=-1&token=${getToken()}`
            }
        }),
        getFilmById: build.query<IFilmData, string | Array<string> | undefined>({
            query: id => {
                return `/movie?search=${id}&field=id&token=${getToken()}`
            }
        }),
        getFilmsById: build.query<IFilmsData, IQuery>({
            query: ({filters, limit}) => {
                return `/movie?${filters}&limit=${limit}&token=${getToken()}`
            }
        }),
        getFilms: build.query<IFilmsData, IQuery>({
            query: ({filters, page, search}) => {
                return `/movie?${filters.genre}${search}&search[]=${filters.year}&field[]=year&search[]=${filters.rating}&field=rating.kp&search=${filters.type}&field=typeNumber&search=!null&field=votes.kp&sortField=year&sortType=${filters.sortByRelease}&page=${page}&isStrict=false&token=${getToken()}`
            }
        }),
        getFavourites: build.query<IFilmsData, IQuery>({
            query: ({id, filters, page, search}) => {
                return `/movie?${filters.genre}&search[]=${filters.year}&field[]=year&search[]=${filters.rating}&field=rating.kp&search=${filters.type}&field=typeNumber&${id}&sortField=year&sortType=${filters.sortByRelease}&limit=10&page=${page}&token=${getToken()}`
            }
        }),
        getPersonById: build.query<IPerson, string | Array<string> | undefined>({
            query: id => {
                return `/person?search=${id}&field=id&token=${getToken()}`
            }
        }),
        getPersonsBySearch: build.query<IPersons, IBaseQuery>({
            query: ({search, page}) => {
                return `/person?search[]=${search}&field[]=name&limit=20&page=${page}&sortField=photo&isStrict=false&token=${getToken()}`

            }
        }),
        getReviewById: build.query<IReview, IBaseQuery>({
            query: ({id, limit}) => {
                return `review?search=${id}&field=movieId&limit=${limit}&token=${getToken()}`
            }
        }),
    })
})

export const {
    getTop,
    getFilmById,
    getFilms,
    getReviewById,
    getPersonById
} = kinopoiskAPI.endpoints;

export const {
    useGetTopQuery,
    useGetFilmsQuery,
    useGetFilmByIdQuery,
    useGetFilmsByIdQuery,
    useGetPersonByIdQuery,
    useGetPersonsBySearchQuery,
    useGetReviewByIdQuery,
    useGetFavouritesQuery
} = kinopoiskAPI;