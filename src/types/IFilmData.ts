import {IFacts} from "./IFacts";
import {IData} from "./IData";


export interface IFilmData {
    name: string
    slogan: string | null
    year: number
    ageRating: number
    alternativeName: string
    id: number
    type: "movie"
    description: string
    backdrop: IBackdrop
    rating: IRating
    votes: IVotes
    videos: IVideos
    budget: IBudget
    fees: IFees
    disctributors: IDistributors
    premiere: IPremiere
    images: IImages
    status: string
    movieLength: number
    productionCompanies: Array<IProductionCompanies>
    spokenLanguages: Array<ISpokenLanguages>
    facts: Array<IFacts>
    genres: Array<IGenres>
    countries: Array<ICountries>
    seasonInfo: []
    persons: Array<IPersons>
    poster: IPoster
    lists: []
    similarMovies: Array<ISimilarMovies>
}

interface IBackdrop {
    _id: string
    url: string | null
}

interface IRating {
    kp: number
    tmdb?: number
    imdb?: number
}

interface IVotes {
    tmdb?: number
    kp: number
    imdb?: number
}

interface IVideos {
    trailers: Array<ITrailers>
    teasers: []
}

interface ITrailers {
    _id: string
    url: string
    name: string
    site: string
    size: number
    type: "TRAILER"
}

interface IBudget {
    value: number
    currency: string
}

interface IFees {
    world: IFeesValues
    usa: IFeesValues
    russia: IFeesValues
}

interface IFeesValues {
    value: number
    currency: string
}

interface IDistributors {
    distributor: string
    distributorRelease: string
}

interface IPremiere {
    country: string
    world: string
    russia: string
    bluray: string
    dvd: string
}

interface IImages {
    posterCount: number
    backdropsCount: number
    framesCount: number
}

interface IProductionCompanies {
    name: string
    url: string
    previewUrl: string
}

interface ISpokenLanguages {
    name: string
    nameEn: string
}

interface IGenres {
    name: string
}


interface ICountries {
    name: string
}

interface IPersons {
    id: number
    name: string
    enName: string
    photo: string
    enProfessing: string
}

interface IPoster {
    _id: string
    url: string
    previewUrl: string
}

export interface ISimilarMovies {
    alternativeName: string
    enName: string
    id: number
    name: string
    poster: IPoster
}
