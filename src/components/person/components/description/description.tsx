import s from './style.module.scss';
import {InfoBlock} from "./infoBlock/InfoBlock";

export const Description = () => {


    return <>
        <div className={s.main}>
            <div>
                <img className={s.poster} src='https://www.film.ru/sites/default/files/people/1546123-881008.jpg'/>
            </div>

            <div className={s.info}>
                <h1>Benedict Cumberbatch</h1>
                <span className={s.engTitle}>Benedict Cumberbatch</span>
                <h2>About the person</h2>
                <ul>
                    <li><span className={s.property}>
                        Career
                    </span>
                        <span className={s.meaning}>
                        Actor
                    </span></li>
                    <li><span className={s.property}>
                        Sex
                    </span>
                        <span className={s.meaning}>
                        male
                    </span></li>
                    <li><span className={s.property}>
                        Heigth
                    </span>
                        <span className={s.meaning}>
                        185
                    </span></li>
                    <li><span className={s.property}>
                        Date of Birth
                    </span>
                        <span className={s.meaning}>
                        19 yuly 1976
                    </span></li>
                    <li><span className={s.property}>
                        Films
                    </span>
                        <span className={s.meaning}>
                        208
                    </span></li>
                    <li><span className={s.property}>
                        Wife
                    </span>
                        <span className={s.meaning}>
                        -
                    </span></li>
                </ul>
            </div>
        </div>
        <InfoBlock/>
    </>
}