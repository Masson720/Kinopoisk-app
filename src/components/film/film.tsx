import s from './style.module.scss';
// @ts-ignore
import Link from "next/link";
import {Description} from "./description/description";


const Film = () => {

    return <>
        <Link href='/'>
            <div className={s.back}>
                {'<'}
            </div>
        </Link>
        <Description/>
    </>
}

export default Film;