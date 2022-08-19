import s from './style.module.scss';
import {FilterForm} from "./filterForm/filterForm";
import {useTypedSelector} from "@/hooks/selector";
import {useActions} from "@/hooks/useActions";
import classNames from "classnames";

export const Filter = ({children, page}) => {
    const {setType} = useActions();

    const {filters: {year, genre, rating, sortByRelease, type}} = useTypedSelector(state => state.filtersReducer);



    return <>
        <div className={s.body}>
            <div className={s.filter}>
                <div className={s.page}>
                    {page}
                </div>
                <div className={s.switcher}>
                    <button className={classNames(s.buttons, type === '1' ? s.active : null)}
                            onClick={() => setType('1')}
                    >
                        Movies
                    </button>
                    <button className={classNames(s.buttons, type === '2' ? s.active : null)}
                            onClick={() => setType('2')}
                    >
                        Series
                    </button>
                    <button className={classNames(s.buttons, type === '3' ? s.active : null)}
                            onClick={() => setType('3')}
                    >
                        Cartoons
                    </button>
                    <button className={classNames(s.buttons, type === '!null' ? s.active : null)}
                            onClick={() => setType('!null')}
                    >
                        All
                    </button>
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