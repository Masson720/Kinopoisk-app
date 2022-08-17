import s from './style.module.scss';
import {FilterForm} from "./filterForm/filterForm";
import {useState} from "react";
import {useTypedSelector} from "@/hooks/selector";
import {getYear} from "@/helpers/helpers";
import {useActions} from "@/hooks/useActions";

export const Filter = ({children, page}) => {
    const {
        setYear,
        setRatings,
        setSortByRelease,
        setGenre,
        resetFilters
    } = useActions()

    const {filters: {year, genre, rating, sortByRelease}} = useTypedSelector(state => state.filtersReducer);

    const [ratingState, setRatingState] = useState({from: 1, do: 10});
    const [genreState, setGenreState] = useState('');
    const [yearState, setYearState] = useState({from: 1888, do: getYear()});
    const [sortState, setSortState] = useState('-1');

    const onSubmit = () => {
       const ratingValue = `${ratingState.from}-${ratingState.do}`;
       const genreValue = genreState;
       const yearValue = `${yearState.from}-${yearState.do}`;
       const sortByReleaseValue = sortState;

        setYear(yearValue);
        setRatings(ratingValue);
        setSortByRelease(sortByReleaseValue);
        setGenre(genreValue);
    }


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
                <FilterForm year={year} genre={genre} rating={rating} sortByRelease={sortByRelease}/>
                <div className={s.buttons}>
                    <button className={s.button} onClick={onSubmit}>Search</button>
                    <button className={s.button} onClick={resetFilters}>Reset</button>
                </div>
            </div>
            <div className={s.children}>{children}</div>
        </div>

    </>
}