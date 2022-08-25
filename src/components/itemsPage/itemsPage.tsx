import s from './style.module.scss';
import {Item} from "./components/item";
import {IFilmsData} from "@/types/IFilmsData";
import {FC, useState} from "react";
import {Pagination} from "@/UI/pagination/pagination";
import {useTypedSelector} from "@/hooks/selector";
import {useGetFilmsQuery} from "@/services/KinopoiskService";



export const ItemsPage: FC<any> = ({docs, page, pages, switcher, isFetching}) => {

    return <>
        <div className={s.body}>
            {docs?.map(e => <Item docs={e}/>)}
            <Pagination actualPage={page} pages={pages} switcher={switcher} isLoading={isFetching}/>
        </div>
    </>
}