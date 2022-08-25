import s from './style.module.scss';
import {InfoBlock} from "../infoBlock/InfoBlock";
import {getColor, getFormatDate} from "@/helpers/helpers";
import React, { Fragment } from "react";
import {IFilmData} from "@/types/IFilmData";
import {WatchFilmButton} from "@/components/buttons/watchFilmButton/watchFilmButton";
import {FavouriteButton} from "@/components/buttons/favouriteButton/favouriteButton";

type FilmPropsType = {
    data: IFilmData
}


export const Description: React.FC<FilmPropsType> = ({data}) => {
    const {
        ageRating, alternativeName, description, facts, poster, slogan,
        videos, year, rating, premiere, persons, similarMovies, name, countries, genres, budget, movieLength, fees, id
    } = data;

    const items = [
        {meaning: 'Country', value: countries?.map((el, id) => <Fragment key={id}>{id ? ', ' : ''}{el.name}</Fragment>), condition: countries?.length},
        {meaning: 'Genre', value: genres?.map((el,id) => <Fragment key={id}>{id ? ', ' : ''}{el.name}</Fragment>), condition: genres?.length},
        {meaning: 'Slogan', value: slogan, condition: slogan},
        {meaning: 'Budget', value: `${budget?.value} ${budget?.currency}`, condition: budget?.value},
        {meaning: 'Age', value: <span className={s.pg}>{`${ageRating} +`}</span>, condition: ageRating},
        {meaning: 'Timing', value: `${movieLength} min`, condition: movieLength},
        {meaning: 'US box office', value: `${fees?.usa?.value} ${fees?.usa?.currency}`, condition: fees?.usa?.value},
        {meaning: 'World box office', value: `${fees?.world?.value} ${fees?.world?.currency}`, condition: fees?.world?.value},
        {meaning: 'World Premiere', value: getFormatDate(premiere?.world), condition: premiere?.world}
    ]

    const listGen = () => {
        const listItems = []
        items.forEach(e => listItems.push(
            <li><span className={s.property}>
                        {e.meaning}
                    </span>
                <span className={s.meaning}>
                        {e.condition ? e.value : '-'}
                    </span>
            </li>
        ))
        return listItems;
    }

    return <>
        <div className={s.main}>
            <div>
                <div className={s.rating} style={{background: getColor(rating.kp)}}>
                    {rating.kp}
                </div>
                <img className={s.poster} src={poster.url}/>
                <div className={s.buttons}>
                    <WatchFilmButton id={id}/>
                    <FavouriteButton id={id}/>
                </div>
            </div>

            <div className={s.info}>
                <h1>{name}</h1>
                <span className={s.engTitle}>{alternativeName}</span>
                <h2>About the movie</h2>
                <ul>
                    {listGen()}
                </ul>
            </div>
        </div>
        <InfoBlock
            description={description}
            facts={facts}
            similarMovies={similarMovies}
            persons={persons}
        />
    </>
}