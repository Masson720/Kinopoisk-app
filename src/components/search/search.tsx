import s from './style.module.scss';
import {SearchMenu} from "./searchMenu/searchMenu";
import { useGetFilmsBySearchQuery } from '@/services/KinopoiskService';
import {useActions} from "@/hooks/useActions";
import {useTypedSelector} from "@/hooks/selector";
import {useEffect, useRef} from "react";
import {useRouter} from "next/router";
import {useOnClickOutside} from "usehooks-ts";

export const Search = () => {
    const {setSearch, setVisible} = useActions();
    const {search, visible} = useTypedSelector(state => state.searchReducer);
    const router = useRouter();
    const activeMenu = visible && search;
    const searchRef = useRef(null);

    useEffect(() => {
        setVisible(false);
    }, [router]);

    const submit = (e) => {
        const value = e.target.value;
        setSearch(value);
    }

    useOnClickOutside(searchRef, () => setVisible(false));

    return <>
        <div className={s.body} ref={searchRef}>
            <input className={s.input}
                   placeholder='Search...'
                   onChange={e => submit(e)}
                   value={search}
                   onFocus={() => setVisible(true)}
            />
            {activeMenu && <SearchMenu search={search}/>}
        </div>
    </>
}