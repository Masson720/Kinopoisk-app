import s from './style.module.scss';
import {useState} from "react";
import classNames from "classnames";

export const Item = ({title, review, date, reviewLikes, reviewDislikes, author}) => {
    const [fullReview, setFullReview] = useState(false);
    console.log(review)

    const getFullReview = () => {
        if(fullReview){
            setFullReview(false)
        }else{
            setFullReview(true)
        }
    }

    return <>
        <div className={s.body}>
            <div className={s.review}>
                <h1>{title}</h1>
                <p className={classNames(s.reviewText, !fullReview && s.truncated)}>{review}</p>
                <button onClick={getFullReview}>{fullReview ? 'Hide review' : 'Show full review'}</button>
            </div>
            <div className={s.other}>
                <span>{date}</span>
                <div className={s.buttons}>
                    <button>Useful</button>
                    <button>No</button>
                </div>
            </div>
        </div>
    </>
}