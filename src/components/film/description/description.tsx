import s from './style.module.scss';

export const Description = () => {
    return <>
        <div className={s.body}>
            <img className={s.poster} src='https://avatars.mds.yandex.net/get-kinopoisk-image/1629390/cf340494-877d-4e48-bdda-96e8c9a7d0f1/300x'/>
            <div className={s.info}>
                <h1>Бэтмен (2022)</h1>
                <span className={s.engTitle}>The Batman</span>
                <h2>About the movie</h2>
                <ul>
                    <li><span className={s.property}>
                        Country
                    </span>
                        <span>
                        USA
                    </span></li>
                    <li><span className={s.property}>
                        Genre
                    </span>
                        <span>
                        drama, crime, detective, thriller
                    </span></li>
                    <li><span className={s.property}>
                        Tagline
                    </span>
                        <span>
                        Unmask The Truth
                    </span></li>
                    <li><span className={s.property}>
                        Budget
                    </span>
                        <span>
                        $ 200 000 000
                    </span></li>
                    <li><span className={s.property}>
                        Age
                    </span>
                        <span>
                        16+
                    </span></li>
                    <li><span className={s.property}>
                        Timing
                    </span>
                        <span>
                        176min
                    </span></li>
                    <li><span className={s.property}>
                        US box office
                    </span>
                        <span>
                        $ 369 345 583
                    </span></li>
                    <li><span className={s.property}>
                        World box office
                    </span>
                        <span>
                        + $ 401 490 580 = $ 770 836 163
                    </span></li>
                    <li><span className={s.property}>
                        World Premiere
                    </span>
                        <span>
                        1 марта 2022
                    </span></li>

                </ul>
            </div>
        </div>
    </>
}