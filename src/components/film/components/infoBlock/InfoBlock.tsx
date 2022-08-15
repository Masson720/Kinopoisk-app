import s from './style.module.scss';
import {useState} from "react";
import {Facts} from "./facts/facts";
import 'swiper/css';
import {IFacts} from "@/types/IFacts";
import {ISimilarMovies} from "@/types/IFilmData";
import {MoreFilms} from "@/components/film/components/infoBlock/moreFilm/moreFilm";
import {Actors} from "@/components/film/components/infoBlock/actors/actors";

type InfoBlockType = {
    description: string
    facts: Array<IFacts>
    similarMovies: Array<ISimilarMovies>
    persons: any
}

export const InfoBlock: React.FC<InfoBlockType> = ({description, facts, similarMovies, persons}) => {
    const [descriptionMode, setDescriptionMode] = useState(true);
    const [actorsMode, setActorsMode] = useState(false);
    const [factsMode, setFactsMode] = useState(false);
    const descriptionSwitcher = () => {
        setDescriptionMode(true)
        setActorsMode(false)
        setFactsMode(false)
    }

    const actorsSwitcher = () => {
        setDescriptionMode(false)
        setActorsMode(true)
        setFactsMode(false)
    }

    const factsSwitcher = () => {
        setDescriptionMode(false)
        setActorsMode(false)
        setFactsMode(true)
    }

    return <>
        <div className={s.body}>
            <div className={s.buttons}>
                <button
                    className={descriptionMode? s.buttonOn : null}
                    onClick={descriptionSwitcher}
                >Description</button>
                <button
                    className={actorsMode? s.buttonOn : null}
                    onClick={actorsSwitcher}
                >Actors</button>
                <button
                    className={factsMode? s.buttonOn : null}
                    onClick={factsSwitcher}
                >Facts</button>
            </div>
            <hr className={s.upper}/>
            <div className={s.info}>
                {descriptionMode? <div className={s.about}>{description}</div> : null}
                {actorsMode? <div><Actors data={persons}/></div> : null}
                {factsMode? <div><Facts facts={facts}/></div> : null}
            </div>
            <MoreFilms data={similarMovies}/>
        </div>
    </>
}