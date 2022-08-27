import s from './style.module.scss';

export const SearchResult = ({children}) => {
    return <>
        <div className={s.body}>
            {children}
        </div>
    </>
}