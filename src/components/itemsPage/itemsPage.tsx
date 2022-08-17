import s from './style.module.scss';
import {Item} from "./components/item";
import {IFilmItem} from "@/types/IFilmsData";
import {FC} from "react";

type ItemsPagePropsType = {
    docs: Array<IFilmItem>
}

export const ItemsPage: FC<ItemsPagePropsType> = ({docs}) => {

    return <>
        <div className={s.body}>
            {docs?.map(e => <Item docs={e}/>)}
        </div>
    </>
}