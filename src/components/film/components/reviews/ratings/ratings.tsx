import s from './style.module.scss';
import {useRouter} from "next/router";
import { useGetReviewByIdQuery } from '@/services/KinopoiskService';
import {FC} from "react";

type RatingsProps = {
    limit: number
}

export const Rating: FC<RatingsProps> = ({limit}) => {
    const {query: {id}} = useRouter();
    const {data, isSuccess} = useGetReviewByIdQuery({id, limit});
    const {docs, total} = {...data}
    console.log(docs)


    const goodReviews = docs?.filter(r => r?.type === 'Позитивный' || !r.type).length;
    const badReviews = docs?.filter(r => r?.type === 'Негативный').length;
    const neutralReviews = docs?.filter(r => r?.type === 'Нейтральный').length;

    return <>
        <div className={s.body}>
            <div className={s.item}>
                <div className={s.amount}>
                    <h1>{total}</h1>
                </div>
                <span>All</span>
            </div>
            <div className={s.item}>
                <div className={s.amount}>
                    <h1 className={s.positive}>{goodReviews}</h1>
                    <span>100.0%</span>
                </div>
                <span>Positive</span>
            </div>
            <div className={s.item}>
                <div className={s.amount}>
                    <h1 className={s.negative}>{badReviews}</h1>
                    <span>0.00%</span>
                </div>
                <span>Negative</span>
            </div>
            <div className={s.item}>
                <div className={s.amount}>
                    <h1>{neutralReviews}</h1>
                    <span>0.00%</span>
                </div>
                <span>Neutral</span>
            </div>
        </div>
    </>
}