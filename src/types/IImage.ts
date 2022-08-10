import {IData} from "./IData";

export interface IImage extends IData {
    docs: Array<IImageItem>
}

interface IImageItem {
    url: string
    previewUrl: string
    height: number
    width: number
    language: string
    type: string
    movieId: number
}