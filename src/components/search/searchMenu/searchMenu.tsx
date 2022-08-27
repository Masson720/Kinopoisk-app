import s from './style.module.scss';
import {useTypedSelector} from "@/hooks/selector";
import {useActions} from "@/hooks/useActions";
import classNames from "classnames";
import { useGetFilmsQuery } from '@/services/KinopoiskService';
import {FilmItem} from "@/components/search/searchMenu/items/filmItem/filmItem";
import {FC} from "react";

type SearchMenuPropsType = {
    search: string
}

export const SearchMenu: FC<SearchMenuPropsType> = ({search}) => {
    const {setType} = useActions();
    const {filters} = useTypedSelector(state => state.filtersReducer);
    let searchString = search !== '' ? `search[]=${search}&field[]=name` : '';
    const {data} = useGetFilmsQuery({filters, search: searchString});
    const {docs} = {...data};

    const buttonItems = [
        {label: 'All', value: '!null', click: setType},
        {label: 'Movies', value: '1', click: setType},
        {label: 'Series', value: '2', click: setType},
        {label: 'Cartoons', value: '3', click: setType},
    ]

    return <>
        <div className={s.body}>
            <div className={s.typeSwitcher}>
                {buttonItems.map(({label, value, click}) =>
                    <button
                        className={classNames(s.typeButton, filters.type === value && s.active)}
                        onClick={() => click(value)}>
                        {label}
                    </button>)}
            </div>
            <div className={s.items}>
                {docs?.map((e) =>
                    <FilmItem poster={e.poster}
                              rating={e.rating}
                              id={e.id}
                              name={e.name}
                              description={e.description}
                              year={e.year}
                    />
                )}
            </div>
        </div>
    </>
}