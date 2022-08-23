import s from './style.module.scss';
import {Item} from "./components/item";
import {IFilmsData} from "@/types/IFilmsData";
import {FC, useState} from "react";
import {Pagination} from "@/UI/pagination/pagination";
import {useTypedSelector} from "@/hooks/selector";
import {useGetFilmsQuery} from "@/services/KinopoiskService";


export const ItemsPage: FC = () => {
    const {filters} = useTypedSelector(state => state.filtersReducer);
    const {search} = useTypedSelector(state => state.searchReducer);
    const [page, setPage] = useState(1);

    let searchString = search !== '' ? `search[]=${search}&field[]=name` : '';
    const {data, isFetching} = useGetFilmsQuery({filters, page, search: searchString});

    return <>
        <div className={s.body}>
            {data?.docs.map(e => <Item docs={e}/>)}
            <Pagination actualPage={page} pages={data?.pages} switcher={setPage} isLoading={isFetching}/>
        </div>
    </>
}