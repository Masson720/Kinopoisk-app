import {IFacts} from "./IFacts";

export interface IPerson {
    spouses: null | string
    id: number
    name: string
    enName: string
    photo: string
    profession: Array<IProfession>
    birthPlace: Array<IBirthPlace>
    deathPlace: null | string
    facts: Array<IFacts>
    movies: Array<IMoviesOfPerson>
    age: number
    birthday: string
    death: null | string
    growth: 183
    sex: string
}

interface IProfession {
    value: string
}

interface IBirthPlace {
    value: string
}

interface IMoviesOfPerson {
    id: number
    name: string
    alternativeName: string
    rating: number
    general: boolean
    description: string
}

