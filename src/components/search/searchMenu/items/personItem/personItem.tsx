import s from './style.module.scss';

export const PersonItem = () => {
    return <>
        <div className={s.body}>
            <img className={s.poster} src="https://upload.wikimedia.org/wikipedia/commons/7/71/Oleksiy_Arestovych_%28cropped%29.jpg" alt="d"/>
            <div className={s.info}>
                <h1 className={s.name}>Алексей Арестович</h1>
                <span className={s.year}>1975</span>
            </div>
        </div>
        </>
}