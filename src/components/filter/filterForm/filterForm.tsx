import s from './style.module.scss';
import React, {useState} from "react";
import {Rating} from "./components/rating/rating";
import {Genre} from "./components/genre/genre";
import {Years} from "./components/years/years";
import {Release} from "./components/release/release";

export const FilterForm = () => {


    return <>
        <div className={s.body}>
            <Rating/>
            <Years/>
            <Genre/>
            <Release/>
        </div>
    </>
}