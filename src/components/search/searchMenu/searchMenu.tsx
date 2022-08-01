import s from './style.module.scss'
import {FilmItem} from "./items/filmItem/filmItem";
import {PersonItem} from "./items/personItem/personItem";

export const SearchMenu = () => {
    return <>
        <div className={s.body}>
            <div className={s.searchResults}>
                <span className={s.searchTitle}>Maybe you were looking for...</span>
                <FilmItem/>
            </div>
            <div className={s.movies}>
                <span className={s.searchTitle}>Films and series</span>
                <FilmItem/>
                <FilmItem/>
                <FilmItem/>
            </div>
            <div className={s.persons}>
                <span className={s.searchTitle}>Persons</span>
                <PersonItem/>
                <PersonItem/>
                <PersonItem/>
            </div>
        </div>
    </>
}