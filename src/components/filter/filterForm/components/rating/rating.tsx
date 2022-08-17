import s from './style.module.scss';



export const Rating = ({rating}) => {


    return <>
        <div className={s.body}>
            <h1 className={s.title}>Rating</h1>
            <div className={s.ratingSelectors}>
                <input className={s.text} type="text"/>
                <input className={s.text} type="text"/>

            </div>
        </div>
    </>
}