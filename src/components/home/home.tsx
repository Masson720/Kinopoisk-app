import s from './style.module.scss'
import {Slider} from "../slider/slider";

export const Home = () => {
    return <>
        <div className={s.ad}>
            <div className={s.title}>Доктор Стрэндж</div>
            <img src={'https://gamemag.ru/images/cache/News/News168841/9af1263ae0-2_1390x600.jpg'}/>
        </div>
        <div className={s.topBlock}>
            <h1>Топ 250</h1>
            <Slider/>
        </div>
        <div className={s.topBlock}>
            <h1>Новинки кино</h1>
            <Slider/>
        </div>

    </>
}