import s from './style.module.scss';
import {Back} from '../back/back'
import {Description} from "./components/description/description";
import {Reviews} from "./components/reviews/reviews";
import {useGetFilmByIdQuery} from "../../services/KinopoiskService";


const Film = ({id}) => {
    const {data, isSuccess} = useGetFilmByIdQuery(id);
    console.log(data)

    if(isSuccess) {
        return <>
            <Back/>
            <Description data={data}/>
            <Reviews/>
        </>
    }

}

export default Film;