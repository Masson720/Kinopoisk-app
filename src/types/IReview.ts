import {IData} from "./IData";

export interface IReview extends IData {
    docs: Array<IReviewItem>
}

interface IReviewItem {
    id: number
    movieId: number
    title: string
    type: 'Позитивный' | 'Негативный' | 'Нейтральный'
    review: string
    date: string
    author: string
    userRating: number
    reviewLikes: number
    reviewDislikes: number
}