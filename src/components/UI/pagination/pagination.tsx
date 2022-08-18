import s from './style.module.scss';

export const Pagination = ({actualPage, pages, switcher, isLoading}) => {

    console.log(isLoading)

    return <>
        <div className={s.body}>
            <button className={s.button}
                    onClick={() => switcher(1)}
                    disabled={actualPage === 1 && !!isLoading}
            >
                {'<<'}
            </button>
            <button className={s.button}
                    onClick={() => switcher(prev => prev - 1)}
                    disabled={actualPage === 1 && !!isLoading}
            >
                {'<'}
            </button>
            <div className={s.info}>
                {`${actualPage}/${pages}`}
            </div>
            <button className={s.button} onClick={() => switcher(prev => prev + 1)} disabled={actualPage === pages || !!isLoading}>
                {'>'}
            </button>
            <button className={s.button} onClick={() => switcher(pages)} disabled={actualPage === pages || !!isLoading}>
                {'>>'}
            </button>
        </div>
    </>
}