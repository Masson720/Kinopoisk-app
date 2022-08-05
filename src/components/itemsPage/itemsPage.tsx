import s from './style.module.scss';
import {Item} from "./components/item";

export const ItemsPage = () => {
    return <>
        <div className={s.body}>
            <Item/>
            <Item/>
            <Item/>
            <Item/>
            <Item/>
        </div>
    </>
}