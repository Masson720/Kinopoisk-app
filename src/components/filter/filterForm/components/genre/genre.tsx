import s from './style.module.scss';
import {genres} from './genres'

export const Genre = () => {
    return <>
        <div className={s.body}>
            <h1 className={s.title}>Genres</h1>
            <select className={s.selector}>
                {genres.map(e => <option className={s.select} value={e.value}>
                    {e.label}
                </option>)}
            </select>
        </div>

    </>
}