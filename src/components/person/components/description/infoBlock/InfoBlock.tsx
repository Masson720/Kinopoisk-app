import s from './style.module.scss';
import {useState} from "react";
import {MoreFilms} from "@/components/moreFilm/moreFilm";
import {Facts} from "@/components/facts/facts";

export const InfoBlock = ({facts, data}) => {
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
                {filmsMode? <MoreFilms data={data?.docs} title={'Films and series'} route={'film'}/> : null}
                {factsMode? <div><Facts facts={facts}/></div> : null}
            </div>
        </div>


    </>
}