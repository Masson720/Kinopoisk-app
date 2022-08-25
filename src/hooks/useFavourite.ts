import {useCallback} from "react"
import useLocalStorage from "use-local-storage";


export const useFavourites = () => {
    const [favourites, setFavourites] = useLocalStorage<Array<number>>('favourites', [] )

    const toggleFavourite = useCallback((id: number) => {
        if(favourites.includes(id)){
            setFavourites(favourites.filter((fav: number) => fav !== id))
        } else {
            setFavourites([...favourites, id])
        }
    }, [favourites]);

    return {
        favourites,
        toggleFavourite
    }
}