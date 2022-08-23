import s from './style.module.scss';
import Link from "next/link";

export const WatchFilmButton = ({id}) => {
    return <>
        <Link href={`/room/${id}`}>
            <button className={s.body}>Watch</button>
        </Link>
    </>
}