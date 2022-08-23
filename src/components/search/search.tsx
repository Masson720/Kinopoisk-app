import s from './style.module.scss';
import {SearchMenu} from "./searchMenu/searchMenu";
import {useEffect, useState} from "react";
import { useGetFilmsBySearchQuery } from '@/services/KinopoiskService';
import {useActions} from "@/hooks/useActions";
import {useTypedSelector} from "@/hooks/selector";

export const Search = () => {
    const {setSearch} = useActions()
    const {search} = useTypedSelector(state => state.searchReducer);

    const [menuStatus, setMenuStatus] = useState(false);

    const {data} = useGetFilmsBySearchQuery({search, limit: 4, type: '1'});



    useEffect(()=> {
        if(search !!= ''){
            setMenuStatus(true);
        }else {
            setMenuStatus(false);
        }
    }, [search]);


    const submit = (e) => {
        const value = e.target.value;
        setSearch(value);
    }

    return <>
        <div className={s.body}>
            <input className={s.input}
                   placeholder='Search...'
                   onBlur={()=> setMenuStatus(false)}
                   onChange={e => submit(e)}
            />
            {menuStatus ?
                <SearchMenu/>
                :
                null
            }
        </div>

    </>
}