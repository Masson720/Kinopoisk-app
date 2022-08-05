import s from './style.module.scss'
import {Search} from "../search/search";
import React from "react";
// @ts-ignore
import Link from "next/link";

export const Header = () => {
    return <div className={s.material}>
        <div className={s.background}>
            <div className={s.header}>
                <Link href={'/'}>
                    <span className={s.logo}>KINOPOISK</span>
                </Link>

                <Search/>
            </div>

        </div>
    </div>
}