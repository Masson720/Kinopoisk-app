import s from './style.module.scss';

export const Item = ({id, poster, name}) => {
    return <>
        <div className={s.body} key={id}>
            <img className={s.poster} src={poster.url} alt={poster.prevUrl}/>
            <h1 className={s.name}>{name}</h1>
        </div>
    </>
}