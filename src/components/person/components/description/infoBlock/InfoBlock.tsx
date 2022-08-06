import s from './style.module.scss';
import {useState} from "react";
import {Slider} from "../../../../slider/slider";
import {Facts} from "./facts/facts";

export const InfoBlock = () => {
    const [filmsMode, setDescriptionMode] = useState(true);
    const [factsMode, setFactsMode] = useState(false)

    const descriptionSwitcher = () => {
        setDescriptionMode(true)
        setFactsMode(false)
    }

    const factsSwitcher = () => {
        setDescriptionMode(false)
        setFactsMode(true)
    }

    return <>
        <div className={s.body}>
            <div className={s.buttons}>
                <button
                    className={filmsMode? s.buttonOn : null}
                    onClick={descriptionSwitcher}
                >Films and Series</button>
                <button
                    className={factsMode? s.buttonOn : null}
                    onClick={factsSwitcher}
                >Facts</button>
            </div>
            <hr className={s.upper}/>
            <div className={s.info}>
                {filmsMode? <Slider/> : null}
                {factsMode? <div><Facts/></div> : null}
            </div>
        </div>


    </>
}