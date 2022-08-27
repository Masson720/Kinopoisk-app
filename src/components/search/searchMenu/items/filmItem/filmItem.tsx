import s from './style.module.scss';
import React from "react";
import Link from "next/link";

export const FilmItem = ({poster, rating, id, description, name, year}) => {
    return <>
        <Link href={`film/${id}`}>
            <div className={s.body}>
                <img className={s.poster} src={poster.previewUrl} alt="d"/>
                <div className={s.info}>
                    <h1 className={s.title}>{name}</h1>
                    <div className={s.description}>{description}</div>
                    <div className={s.year}>{year}</div>
                    <div className={s.rating}>{rating.kp}</div>
                </div>
            </div>
        </Link>

    </>
}