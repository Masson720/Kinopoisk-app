import {Layout} from "@/components/Layout/layout";
import {Filter} from "@/components/filter/filter";
import {ItemsPage} from "@/components/itemsPage/itemsPage";
import React, {useState} from "react";
import {useTypedSelector} from "@/hooks/selector";
import { useGetFilmsQuery } from "@/services/KinopoiskService";


export default function Films(){
    const {filters} = useTypedSelector(state => state.filtersReducer);
    const [page, setPage] = useState(1)
    const {data, isFetching} = useGetFilmsQuery({filters, page});

    return <>
        <Layout>
            <Filter page='Films'>
                <ItemsPage data={data} actualPage={page} switcher={setPage} isLoading={isFetching}/>
            </Filter>
        </Layout>
    </>
}
