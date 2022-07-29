import s from './style.module.scss';
import {Back} from '../back/back'
import {Description} from "./description/description";
import {Reviews} from "./reviews/reviews";


const Film = () => {

    return <>
        <Back/>
        <Description/>
        <Reviews/>
    </>
}

export default Film;