import s from './style.module.scss';
import {Rating} from "./ratings/ratings";
import {Item} from "./item/item";

export const Reviews = () => {
    return <>
        <div className={s.body}>
            <h1>Reviews</h1>
            <div className={s.rewiewBlock}>
                <div className={s.reviews}>
                    <Item/>
                    <Item/>
                    <button className={s.showButton}>Show more</button>
                </div>
                <Rating/>
            </div>
        </div>
    </>
}