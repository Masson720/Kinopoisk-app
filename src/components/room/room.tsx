import {useRouter} from "next/router";
import {useGetFilmByIdQuery} from '@/services/KinopoiskService';
import s from './style.module.scss';
import {useEffect} from "react";

export const Room = () => {
    const {query: {id}} = useRouter();
    const {data} = useGetFilmByIdQuery(id);

    useEffect(() => {
        const script = document.createElement('script');
        script.src = "/player.js";
        document.body.appendChild(script);

        return () => {
            script.remove();
        }
    }, []);


    return <>
        <div className={s.body}>
            <div className={s.player}>
                <div className={s.header}>
                    <button className={s.backButton}>{'<'}</button>
                </div>
                <div className={s.video} data-kinopoisk={id} id="kinobd" data-resize="1" data-bg="#000"></div>
            </div>
            <div className={s.chat}>
                hello
            </div>
        </div>
    </>
}