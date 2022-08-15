import s from './style.module.scss';
import {useState} from "react";
import classNames from "classnames";
import {getReviewColor} from "@/helpers/helpers";

export const Item = ({title, review, date, reviewLikes, reviewDislikes, author, type}) => {
    const [fullReview, setFullReview] = useState(false);
    const getFullReview = () => {
        if(fullReview){
            setFullReview(false)
        }else{
            setFullReview(true)
        }
    }


    return <>
        <div className={s.body} style={{background: getReviewColor(type)}}>
            <div className={s.review}>
                <h1>{title}</h1>
                <p className={classNames(s.reviewText, !fullReview && s.truncated)}>{review}</p>
                <button onClick={getFullReview}>{fullReview ? 'Hide review' : 'Show full review'}</button>
            </div>
            <div className={s.other}>
                <span>{date}</span>
                <div className={s.buttons}>
                    <button>Useful <b>{reviewLikes}</b></button>
                    <button>No <b>{reviewDislikes}</b></button>
                </div>
            </div>
        </div>
    </>
}