import s from './style.module.scss'
import {Search} from "../search/search";

export const Header = () => {
    return <>
        <div className={s.background}>
            <div className={s.header}>
                <span className={s.logo}>KINOPOISK</span>
                <Search/>
            </div>

        </div>
    </>
}