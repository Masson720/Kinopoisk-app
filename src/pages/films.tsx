import {Layout} from "@/components/Layout/layout";
import {Filter} from "@/components/filter/filter";
import {ItemsPage} from "@/components/itemsPage/itemsPage";
import React, {useState} from "react";
import {useTypedSelector} from "@/hooks/selector";
import { useGetFilmsQuery, getFilms } from "@/services/KinopoiskService";
import {GetServerSideProps, NextPage} from "next";
import {initialStore} from "@/store/store";


const Films: NextPage = () =>{
    const {filters} = useTypedSelector(state => state.filtersReducer);
    const {search} = useTypedSelector(state => state.searchReducer);
    const [page, setPage] = useState(1);
    const {data, isFetching} = useGetFilmsQuery({filters, page, search});
    return <>
        <Layout>
            <Filter page='Films'>
                <ItemsPage/>
            </Filter>
        </Layout>
    </>
}

export const getServerSideProps: GetServerSideProps = async () => {
    const store = initialStore();
    const state = store.getState();
    const page: number = 1;
    const {filters} = state.filtersReducer;

    await store.dispatch(getFilms.initiate({filters, page}))

    return {
        props: {
            initialReduxState: store.getState()
        }
    }
}

export default Films;
