import {Layout} from "@/components/Layout/layout";
import {Navbar} from "@/components/navbar/navbar";
import {Home} from "@/components/home/home";
// @ts-ignore
import {GetStaticProps} from "next";
import {initialStore} from "@/store/store";
import {getTop} from '@/services/KinopoiskService';


export default function index (){

    return <>
        <Layout>
            <Navbar>
                <Home/>
            </Navbar>
        </Layout>
    </>
}

export const getStaticProps: GetStaticProps = async () => {
    const store = initialStore();
    const state = store.getState();
    const {filmsLimit, seriesLimit} = state.loadReducer
    await store.dispatch(getTop.initiate(filmsLimit))
    return {props: {initialReduxState: store.getState()}}
}