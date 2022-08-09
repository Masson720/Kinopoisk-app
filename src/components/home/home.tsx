import s from './style.module.scss'
import {Slider} from "../slider/slider";
import {NewFilms} from "../newFilms/newFilms";


export const Home = () => {
    return <>
        <div className={s.ad}>
            <div className={s.title}>Доктор Стрэндж</div>
            <img className={s.img} src={'https://gamemag.ru/images/cache/News/News168841/9af1263ae0-2_1390x600.jpg'}/>
        </div>
        <div className={s.topBlock}>

        </div>
        <div className={s.topBlock}>
            <NewFilms/>
        </div>
    </>
}

