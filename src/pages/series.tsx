import {Layout} from "../components/Layout/layout";
import {Filter} from "../components/filter/filter";
import {ItemsPage} from "../components/itemsPage/itemsPage";
import React from "react";
import {FilmsPage} from "../components/UI/filmsPage/filmsPage";

export default function Films(){
    return <>
        <Layout>
            <FilmsPage title='Series'/>
            <Filter>
                <ItemsPage/>
            </Filter>
        </Layout>
    </>
}