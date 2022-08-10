import {IData} from "./IData";

export interface IPersons extends IData {
    docs: Array<IPersonItem>
}

interface IPersonItem {
    id: string
    name: string
    enName: string
    photo: string
    age: number
    sex: string
}