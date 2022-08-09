import s from './style.module.scss';
import {useState} from "react";
import {Slider} from "../../../slider/slider";
import {Facts} from "./facts/facts";

export const InfoBlock = () => {
    const [descriptionMode, setDescriptionMode] = useState(true);
    const [actorsMode, setActorsMode] = useState(false);
    const [factsMode, setFactsMode] = useState(false)

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
                {descriptionMode? <div className={s.about}>Описание</div> : null}
                {actorsMode? <div></div> : null}
                {factsMode? <div><Facts/></div> : null}
            </div>
            <div className={s.moreFilms}>
                <h1>Similar films</h1>
                <div></div>
            </div>
            
        </div>


    </>
}