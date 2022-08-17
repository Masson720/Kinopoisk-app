import s from './style.module.scss';
import {Formik} from "formik";
import {getYear} from "@/helpers/helpers";

export const FilterForm = ({year, genre, rating, sortByRelease}) => {




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
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                    }, 400);
                }}
            >
                {({
                      values,
                      errors,
                      touched,
                      handleChange,
                      handleBlur,
                      handleSubmit,
                      isSubmitting,
                      /* and other goodies */
                  }) => (
                    <form onSubmit={handleSubmit}>
                        <div>
                            <input
                                type="ratingDo"
                                name="ratingDo"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.ratingDo}
                            />

                            <input
                                type="ratingFrom"
                                name="ratingFrom"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.ratingFrom}
                            />
                        </div>
                        <div>
                            <input
                                type="yearDo"
                                name="yearDo"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.yearDo}
                            />
                            <input
                                type="yearFrom"
                                name="yearFrom"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.yearFrom}
                            />
                        </div>
                        <button type="submit" disabled={isSubmitting}>
                            Submit
                        </button>
                    </form>
                )}
            </Formik>
        </div>
    </>
}