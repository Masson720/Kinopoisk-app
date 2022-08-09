import s from './style.module.scss';
import React from "react";
import {Slider} from "../slider/slider";
import {useTypedSelector} from "../../hooks/selector";
import {useGetTopQuery} from "../../services/KinopoiskService";

export const NewFilms = () => {
    const {filmsLimit} = useTypedSelector(state => state.loadReducer)
    const {data, isSuccess} = useGetTopQuery(filmsLimit);
    const {docs, total, limit, page, pages} = data;

    if(!isSuccess) <h1>Loading...</h1>

    else return <>
        <div>
            <h1>New Films</h1>
            <Slider
                docs={docs}
                total={total}
                limit={limit}
                page={page}
                pages={pages}
            />
        </div>
    </>
}