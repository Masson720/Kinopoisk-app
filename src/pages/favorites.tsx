import {Layout} from "@/components/Layout/layout";
import {Filter} from "@/components/filter/filter";
import {ItemsPage} from "@/components/itemsPage/itemsPage";
import React, {useState} from "react";
import {useTypedSelector} from "@/hooks/selector";
import {useFavourites} from "@/hooks/useFavourite";
import { useGetFavouritesQuery } from "@/services/KinopoiskService";

const Favorites = () => {

    const {favourites} = useFavourites();
    const {filters} = useTypedSelector(state => state.filtersReducer);
    const {search} = useTypedSelector(state => state.searchReducer);
    const [page, setPage] = useState(1);
    const id = favourites.map((e) => `search=${e}&field=id`).join('&');
    const {data, isFetching} = useGetFavouritesQuery({id, filters, page, search});

    return <>
        <Layout>
            <Filter page='Favorites'>
                <ItemsPage docs={data?.docs}
                           pages={data?.pages}
                           page={page}
                           switcher={setPage}
                           isFetching={isFetching}/>
            </Filter>
        </Layout>
    </>
}

export default Favorites;