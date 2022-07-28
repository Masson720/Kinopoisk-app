import s from './style.module.scss';
import React from "react";
// @ts-ignore
import Link from "next/link";

export const Navbar = ({children}) => {
    return <>
        <div className={s.body}>
            <ul className={s.navbar}>
                <li>
                    <Link href='/'>
                        <a>
                            Home Page
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href='/persons'>
                        <a>
                            Persons
                        </a>
                    </Link>
                </li>
                <li>Films</li>
                <li>Cartoons</li>
                <li>Series</li>
            </ul>
            <div className={s.children}>{children}</div>
        </div>
    </>
}