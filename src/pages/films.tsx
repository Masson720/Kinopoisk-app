import {Layout} from "@/components/Layout/layout";
import {Filter} from "@/components/filter/filter";
import {ItemsPage} from "@/components/itemsPage/itemsPage";
import React from "react";
import {useTypedSelector} from "@/hooks/selector";
import { useGetFilmsBySearchQuery } from "@/services/KinopoiskService";


export default function Films(){
    const {filters} = useTypedSelector(state => state.filtersReducer)
    const {data, isSuccess} = useGetFilmsBySearchQuery({filters})

    return <>
        <Layout>
            <Filter page='Films'>
                <ItemsPage docs={data?.docs}/>
            </Filter>
        </Layout>
    </>
}
