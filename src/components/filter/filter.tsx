import s from './style.module.scss';
import {FilterForm} from "./filterForm/filterForm";
import {useState} from "react";

export const Filter = ({children}) => {

    const [rating, setRating] = useState({
        rating: [1, 10]
    })

    return <>
        <div className={s.body}>
            <div className={s.filter}>
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
            </div>
            <div className={s.children}>{children}</div>
        </div>

    </>
}