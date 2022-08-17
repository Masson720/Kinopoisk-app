import s from './style.module.scss';
import React, {FC} from "react";
import Link from '../../../../node_modules/next/link';
import {IFilmItem} from "@/types/IFilmsData";
import {getColor, getPath} from "@/helpers/helpers";

type ItemPropsType = {
    docs: IFilmItem
}

export const Item: FC<ItemPropsType> = ({docs}) => {
    const {
        externalId,
        poster,
        rating,
        votes,
        id,
        type,
        name,
        year,
        description,
        movieLength
    } = docs;

    const path = getPath(type);

    return <>
        <Link href={`/${path}/${id}`}>
            <div className={s.body}>
                <img className={s.poster} src={poster.previewUrl} alt=""/>
                <div className={s.info}>
                    <h1 className={s.title}>{name}</h1>
                    <span>{year}, </span><span>{movieLength}min</span>
                    <div className={s.description}>
                        {description}
                    </div>
                </div>
                <span className={s.rating} style={{color: getColor(rating.kp)}}>
                    {rating.kp}
                </span>
            </div>
        </Link>
    </>
}