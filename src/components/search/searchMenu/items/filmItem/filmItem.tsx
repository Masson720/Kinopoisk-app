import s from './style.module.scss';

export const FilmItem = () => {
    return <>
        <div className={s.body}>
            <img className={s.poster} src="https://ru-images.kinorium.com/movie/1080/1442354.jpg?1594069266" alt="d"/>
            <div className={s.info}>
                <h1 className={s.title}>The Avengers Final</h1>
                <div className={s.engTitle}>The Avengers Final</div>
                <div className={s.year}>2019</div>
                <div className={s.rating}>7.9</div>
            </div>
        </div>
    </>
}