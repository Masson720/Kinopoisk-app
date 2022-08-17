import s from './style.module.scss';
import React, {useState} from "react";
import {Rating} from "./components/rating/rating";
import {Genre} from "./components/genre/genre";
import {Years} from "./components/years/years";
import {Release} from "./components/release/release";

export const FilterForm = ({year, genre, rating, sortByRelease}) => {

    return <>
        <div className={s.body}>
            <Rating rating={rating}/>
            <Years year={year}/>
            <Genre genre={genre}/>
            <Release sortByRelease={sortByRelease}/>
        </div>
    </>
}