import s from './style.module.scss';
import {InfoBlock} from "../infoBlock/InfoBlock";
import {getColor} from "../../../../helpers/helpers";

export const Description = ({data}) => {
    const {
        ageRating, alternativeName, description, facts, poster, slogan,
        trailers, year, rating, premiere, persons, similarMovies
    } = data;
    
    return <>
        <div className={s.main}>
            <div>
                <div className={s.rating} style={{background: getColor(rating.kp)}}>
                    7.9
                </div>
                <img className={s.poster} src='https://avatars.mds.yandex.net/get-kinopoisk-image/1629390/cf340494-877d-4e48-bdda-96e8c9a7d0f1/300x'/>

            </div>

            <div className={s.info}>
                <h1>Бэтмен (2022)</h1>
                <span className={s.engTitle}>The Batman</span>
                <h2>About the movie</h2>
                <ul>
                    <li><span className={s.property}>
                        Country
                    </span>
                        <span className={s.meaning}>
                        USA
                    </span></li>
                    <li><span className={s.property}>
                        Genre
                    </span>
                        <span className={s.meaning}>
                        drama, crime, detective, thriller
                    </span></li>
                    <li><span className={s.property}>
                        Tagline
                    </span>
                        <span className={s.meaning}>
                        Unmask The Truth
                    </span></li>
                    <li><span className={s.property}>
                        Budget
                    </span>
                        <span className={s.meaning}>
                        $ 200 000 000
                    </span></li>
                    <li><span className={s.property}>
                        Age
                    </span>
                        <span className={s.meaning + ' ' + s.pg}>
                        16+
                    </span></li>
                    <li><span className={s.property}>
                        Timing
                    </span>
                        <span className={s.meaning}>
                        176min
                    </span></li>
                    <li><span className={s.property}>
                        US box office
                    </span>
                        <span className={s.meaning}>
                        $ 369 345 583
                    </span></li>
                    <li><span className={s.property}>
                        World box office
                    </span>
                        <span className={s.meaning}>
                        + $ 401 490 580 = $ 770 836 163
                    </span></li>
                    <li><span className={s.property}>
                        World Premiere
                    </span>
                        <span className={s.meaning}>
                        1 марта 2022
                    </span></li>

                </ul>
            </div>
        </div>
        <InfoBlock/>
    </>
}