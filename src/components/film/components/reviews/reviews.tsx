import s from './style.module.scss';
import {Rating} from "./ratings/ratings";
import {Item} from "./item/item";
import { useGetReviewByIdQuery } from '@/services/KinopoiskService';

export const Reviews = ({id}) => {
    const {data, isSuccess} = useGetReviewByIdQuery(id);
    const {docs, total, page, pages} = {...data};
    console.log(docs)

    return <>
        <div className={s.body}>
            <h1>Reviews</h1>
            <div className={s.rewiewBlock}>
                <div className={s.reviews}>
                    {isSuccess ? docs.map(e =>
                        <Item key={e.id}
                              date={e.date}
                              title={e.title}
                              review={e.review}
                              reviewLikes={e.reviewLikes}
                              reviewDislikes={e.reviewDislikes}
                              author={e.author}
                    />) : null}
                    <button className={s.showButton}>Show more</button>
                </div>
                <Rating/>
            </div>
        </div>
    </>
}