import s from './style.module.scss';
import {FilterForm} from "./filterForm/filterForm";
import {useState} from "react";

export const Filter = ({children, page}) => {

    const [rating, setRating] = useState({
        rating: [1, 10]
    })

    return <>
        <div className={s.body}>
            <div className={s.filter}>
                <div className={s.page}>
                    {page}
                </div>
                <div className={s.filterChoices}>
                    <div className={s.rating + ' ' + s.item}>
                        Rating:
                    </div>
                    <div className={s.years + ' ' + s.item}>
                        Years of Production:
                    </div>
                    <div className={s.genre + ' ' + s.item}>
                        Genre:
                    </div>
                    <div className={s.release + ' ' + s.item}>
                        Release:
                    </div>
                </div>
                <FilterForm/>
                <div className={s.buttons}>
                    <button className={s.button}>Search</button>
                    <button className={s.button}>Reset</button>
                </div>
            </div>
            <div className={s.children}>{children}</div>
        </div>

    </>
}