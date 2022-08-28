import s from './style.module.scss';
import {useState} from "react";

export const SearchPersons = ({submit}) => {
    const [search, setSearch] = useState('')

    return <>
        <div className={s.body}>
            <h1 className={s.title}>Search persons</h1>
            <input className={s.searchInput}
                   type="text"
                   placeholder='Search persons'
                   value={search}
                   onChange={(e) => setSearch(e.target.value)}
            />
            <button className={s.searchButton}
                    onClick={() => submit(search)}
            >Search
            </button>
        </div>

    </>
}