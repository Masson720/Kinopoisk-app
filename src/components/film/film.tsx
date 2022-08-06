import s from './style.module.scss';
import {Back} from '../back/back'
import {Description} from "./components/description/description";
import {Reviews} from "./components/reviews/reviews";


const Film = () => {

    return <>
        <Back/>
        <Description/>
        <Reviews/>
    </>
}

export default Film;