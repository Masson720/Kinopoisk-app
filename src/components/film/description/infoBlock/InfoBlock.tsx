import s from './style.module.scss';
import {useState} from "react";

export const InfoBlock = () => {
    const [description, setDescription] = useState(true)


    return <>
        <div className={s.body}>
            <button>Description</button>
            <button>Actors</button>
            <button>Facts</button>
            <hr className={s.upper}/>
        </div>
    </>
}