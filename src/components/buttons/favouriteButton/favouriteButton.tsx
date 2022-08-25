import s from './style.module.scss';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import {useFavourites} from "@/hooks/useFavourite";
import {useEffect, useMemo, useState} from "react";
import classNames from "classnames";


export const FavouriteButton = ({id}) => {
    const {favourites, toggleFavourite} = useFavourites();
    const isFavourite = useMemo(() => favourites.includes(Number(id)), [favourites, id]);
    const [switcher, setSwitcher] = useState(isFavourite);

    useEffect(() => {
        setSwitcher(isFavourite);
    }, [isFavourite])


    return <>
        <div className={s.container}>
            <button className={classNames(s.body, switcher && s.pressed)} onClick={() => toggleFavourite(id)}>
            <span className={switcher && s.red}>
                <FontAwesomeIcon icon={faHeart}/>
            </span>
                {!switcher && ' Like'}
            </button>
        </div>

    </>
}