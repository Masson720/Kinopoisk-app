import s from './style.module.scss';
import {FC} from "react";

type PaginationPropsType = {
    actualPage: number
    pages: number
    switcher: (e: any) => void
    isLoading: boolean
    isSuccess: boolean
}

export const Pagination: FC<PaginationPropsType> = ({actualPage, pages, switcher, isLoading, isSuccess}) => {

    return <>
        {pages > 1 && isSuccess ?
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
            <button className={s.button}
                    onClick={() => switcher(prev => prev + 1)}
                    disabled={actualPage === pages || !!isLoading}
            >
                {'>'}
            </button>
            <button className={s.button}
                    onClick={() => switcher(pages)}
                    disabled={actualPage === pages || !!isLoading}>
                {'>>'}
            </button>
        </div>
            :
            null
        }
    </>
}