import s from './style.module.scss';
import {FilterForm} from "./filterForm/filterForm";
import {useTypedSelector} from "@/hooks/selector";

export const Filter = ({children, page}) => {

    const {filters: {year, genre, rating, sortByRelease}} = useTypedSelector(state => state.filtersReducer);


    return <>
        <div className={s.body}>
            <div className={s.filter}>
                <div className={s.page}>
                    {page}
                </div>
                <div className={s.filterChoices}>
                    <div className={s.rating + ' ' + s.item}>
                        Rating: {rating}
                    </div>
                    <div className={s.years + ' ' + s.item}>
                        Years of Production: {year}
                    </div>
                    <div className={s.genre + ' ' + s.item}>
                        Genre: {genre ? genre : 'All genres'}
                    </div>
                    <div className={s.release + ' ' + s.item}>
                        Release: {sortByRelease === '-1' ? 'New' : 'Old'}
                    </div>
                </div>
                <FilterForm/>
            </div>
            <div className={s.children}>{children}</div>
        </div>

    </>
}