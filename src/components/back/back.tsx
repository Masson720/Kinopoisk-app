import s from './style.module.scss';
// @ts-ignore
import Link from "next/link";


export const Back = () => {
    return <>
        <Link href='/'>
            <div className={s.back}>
                {'<'}
            </div>
        </Link>
    </>
}