import s from './style.module.scss';

export const Release = () => {
    return <>
        <div className={s.body}>
            <h1 className={s.title}>Release</h1>
            <div>
                <label  className={s.label}>
                    <input className={s.radio} type='radio' name='release'/>
                    <span className={s.text}>New</span>
                </label>
            </div>
            <div>
                <label className={s.label}>
                    <input className={s.radio} type='radio' name='release'/>
                    <span className={s.text}>Old</span>
                </label>
            </div>
        </div>
    </>
}