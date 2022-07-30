import s from './style.module.scss';
import {useState} from "react";

export const FilterForm = () => {

    return <>
        <div className={s.rating}>
            <h1 className={s.title}>Rating</h1>
            <div className={s.ratingSelectors}>
                <div className={s.item}>
                    <input className={s.text} type="text"/>
                </div>
                <div className={s.item}>
                    <input className={s.text} type="text"/>
                </div>
            </div>
        </div>
    </>
}