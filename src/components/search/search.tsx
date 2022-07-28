import s from './style.module.scss';
import {SearchMenu} from "./searchMenu/searchMenu";
import {useEffect, useState} from "react";

export const Search = () => {
    const [menuStatus, setMenuStatus] = useState(false);
    const [value, setValue] = useState('');

    useEffect(()=> {
        if(value !!= ''){
            setMenuStatus(true);
        }else {
            setMenuStatus(false);
        }
    }, [value])

    const submit = (e) => {
        const value = e.target.value;
        setValue(value)
    }

    return <>
        <div className={s.body}>
            <input className={s.input}
                   placeholder='Search...'
                   onBlur={()=> setMenuStatus(false)}
                   onChange={e=> submit(e)}
            />
            {menuStatus ?
                <SearchMenu/>
                :
                null
            }
        </div>

    </>
}