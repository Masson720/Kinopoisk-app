import {IData} from "./IData";

export interface IFilmsData extends IData {
    docs: Array<IFilmItem>
}

export interface IFilmItem {
    externalId: IExternalId
    poster: IPoster
    rating: IRating
    votes: IRating
    id: number
    type: string
    name: string
    year: number
    description: string
    movieLength: number
}

interface IExternalId {
    imdb?: string
}

interface IPoster {
    url: string
    previewUrl: string
}

interface IRating {
    kp: number
    imdb: number
}

