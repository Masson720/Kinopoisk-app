import s from './style.module.scss';

export const FilmsPage = ({title}) => {
    return <>
        <div className={s.body}>
            <h1 className={s.title}>{title}</h1>
        </div>
    </>
}