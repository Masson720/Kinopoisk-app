import s from './style.module.scss';
import Image from 'next/image';
import Link from "next/link";
import classNames from "classnames";
import {getColor} from "@/helpers/helpers";


export const Item = ({name, id, poster, rating, year}) => {
    return <>
        <div className={s.body}>
            <li className={s.link}>
                <Link href={`/film/${id}`}>
                    <a>
                        <div className={classNames(s.frame, s.rating)} style={{background: getColor(rating.kp)}}>{rating.kp}</div>
                        <div className={classNames(s.frame, s.year)}>{year}</div>
                        <Image className={s.poster}
                               src={poster?.previewUrl}
                               alt={name}
                               layout="fill"
                        />
                    </a>
                </Link>
            </li>
        </div>
        <h1 className={s.title}>{name}</h1>
    </>
}