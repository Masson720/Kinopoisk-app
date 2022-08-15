import s from './style.module.scss';
import {Back} from '../back/back'
import {Description} from "./components/description/description";
import {Reviews} from "./components/reviews/reviews";
import {useGetFilmByIdQuery} from "@/services/KinopoiskService";


export const Film = ({id}) => {
    const {data, isSuccess} = useGetFilmByIdQuery(id);
    if(isSuccess) {
        return <>
            <Back/>
            <Description data={data}/>
            <Reviews id={id}/>
        </>
    }

}
