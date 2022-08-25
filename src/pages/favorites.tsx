import {Layout} from "@/components/Layout/layout";
import {Filter} from "@/components/filter/filter";
import {ItemsPage} from "@/components/itemsPage/itemsPage";
import React from "react";

const Favorites = () => {
    return <>
        <Layout>
            <Filter page='Favorites'>
                <ItemsPage/>
            </Filter>
        </Layout>
    </>
}

export default Favorites;