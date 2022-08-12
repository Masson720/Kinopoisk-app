import s from './style.module.scss';
import classNames from 'classnames';
import {getColor} from "@/helpers/helpers";
import React from "react";
import Link from "next/link";

export const Item = ({name, poster, year, id, rating}) => {


    return <>
        <Link href={`/film/${id}`}>
            <div className={s.body} key={id}>
                <div className={classNames(s.rating, s.frame)} style={{background: getColor(rating)}}>{rating}</div>
                <span className={classNames(s.year, s.frame)}>{year}</span>
                <img className={s.poster} src={poster} alt=""/>
                <h1 className={s.title}>{name}</h1>
            </div>
        </Link>

    </>
}