import s from './style.module.scss';
import {Field, Formik} from "formik";
import {getYear} from "@/helpers/helpers";
import {genres} from "./genres";
import {useActions} from "@/hooks/useActions";
import {useEffect} from "react";

export const FilterForm = () => {
    const {
        setYear,
        setRatings,
        setSortByRelease,
        setGenre,
        resetFilters
    } = useActions()

    useEffect(() => {
        return () => {
            resetFilters()
        }
    }, [])

    const onSubmit = (values) => {
        const ratingValue = `${values.ratingDo}-${values.ratingFrom}`;
        const genreValue = values.genres !== '' ? `search[]=${values.genres}&field[]=genres.name` : '';
        const yearValue = `${values.yearDo}-${values.yearFrom}`;
        const sortByReleaseValue = values.sort;

        setYear(yearValue);
        setRatings(ratingValue);
        setSortByRelease(sortByReleaseValue);
        setGenre(genreValue);
    }

    const onReset = () => {
        resetFilters()
    }

    return <>
        <div className={s.body}>
            <Formik
                initialValues={{
                    ratingDo: '1',
                    ratingFrom: '10',
                    yearDo: '1960',
                    yearFrom: getYear(),
                    sort: '-1',
                    genres: ''
                }}
                validate={values => {

                }}
                onSubmit={(values) => {
                    onSubmit(values)
                }}
            >
                {({
                      values,
                      handleChange,
                      handleBlur,
                      handleSubmit,
                  }) => (
                    <form onSubmit={handleSubmit}>
                        <h1 className={s.title}>Rating</h1>
                        <div className={s.inputBlock}>
                            <input
                                className={s.input}
                                type="ratingDo"
                                name="ratingDo"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.ratingDo}
                            />

                            <input
                                className={s.input}
                                type="ratingFrom"
                                name="ratingFrom"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.ratingFrom}
                            />
                        </div>
                        <h1 className={s.title}>Years of production</h1>
                        <div className={s.inputBlock}>
                            <input
                                className={s.input}
                                type="yearDo"
                                name="yearDo"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.yearDo}
                            />
                            <input
                                className={s.input}
                                type="yearFrom"
                                name="yearFrom"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.yearFrom}
                            />
                        </div>
                        <h1 className={s.title}>Release</h1>
                        <div className={s.label}>
                            <label className={s.label}>
                                <Field className={s.radio} type="radio" name="sort" value="1" />
                                Old
                            </label>
                            <label className={s.label}>
                                <Field className={s.radio} type="radio" name="sort" value="-1" />
                                New
                            </label>
                        </div>
                        <h1 className={s.title}>Genres</h1>
                        <div className={s.inputBlock}>
                            <select className={s.selector} name='genres' onChange={handleChange} value={values.genres}>
                                {genres.map(e => <option className={s.select} key={e.value} value={e.value}>
                                    {e.label}
                                </option>)}
                            </select>
                        </div>
                        <div className={s.buttons}>
                            <button className={s.button} type="submit">Search</button>
                            <button className={s.button} onClick={onReset}>Reset</button>
                        </div>
                    </form>
                )}
            </Formik>
        </div>
    </>
}