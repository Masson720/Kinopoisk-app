import s from './style.module.scss';
import {Item} from "./components/item";
import {IFilmsData} from "@/types/IFilmsData";
import {FC} from "react";
import {Pagination} from "@/UI/pagination/pagination";

type ItemsPagePropsType = {
    data: IFilmsData
    actualPage: number
    switcher: (number) => void
    isLoading: boolean
}

export const ItemsPage: FC<ItemsPagePropsType> = ({data, actualPage, switcher, isLoading}) => {

    return <>
        <div className={s.body}>
            <Pagination actualPage={actualPage} pages={data?.pages} switcher={switcher} isLoading={isLoading}/>
            {data?.docs.map(e => <Item docs={e}/>)}
        </div>
    </>
}