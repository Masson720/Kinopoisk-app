import s from './style.module.scss';

export const Release = () => {
    return <>
        <div className={s.body}>
            <h1 className={s.title}>Release</h1>
            <div>
                <label htmlFor="">
                    <input className={s.checkBox} type='checkbox'/>
                </label>
                <span>New</span>
            </div>
            <div>
                <label htmlFor="">
                    <input className={s.checkBox} type='checkbox'/>
                </label>
                <span>Old</span>
            </div>
        </div>
    </>
}