import {Layout} from "../components/Layout/layout";
import {Filter} from "../components/filter/filter";
import {ItemsPage} from "../components/itemsPage/itemsPage";
import React from "react";

export default function Cartoons(){
    return <>
        <Layout>
            <Filter page='Cartoons'>
                <ItemsPage/>
            </Filter>
        </Layout>
    </>
}