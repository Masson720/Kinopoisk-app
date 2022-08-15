import s from './style.module.scss';
import {Rating} from "./ratings/ratings";
import {Item} from "./item/item";
import { useGetReviewByIdQuery } from '@/services/KinopoiskService';
import {useState} from "react";

export const Reviews = ({id}) => {
    const [limit, setLimit] = useState<number>(4)
    const {data, isSuccess} = useGetReviewByIdQuery({id, limit});
    const {docs, total, page, pages} = {...data};


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
                              type={e.type}
                    />) : null}
                    <button className={s.showButton} onClick={() => setLimit(prev => prev + 3)}>Show more</button>
                </div>
                <Rating limit={total}/>
            </div>
        </div>
    </>
}