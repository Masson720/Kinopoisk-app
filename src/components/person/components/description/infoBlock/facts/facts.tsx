import s from './style.module.scss';
import {Item} from "./item/item";

export const Facts = () => {
    return <>
        <div className={s.body}>
            <h1>Do you know that...</h1>
            <Item/>
        </div>
    </>
}