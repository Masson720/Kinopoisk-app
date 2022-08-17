import s from './style.module.scss';

export const Years = ({year}) => {


    return <>
        <div className={s.body}>
            <h1 className={s.title}>Years of production</h1>
            <div className={s.ratingSelectors}>
                <input className={s.text} type="text"/>
                <input className={s.text} type="text"/>
            </div>
        </div>
    </>
}