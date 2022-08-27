import s from './style.module.scss';
import {SearchPersons} from "@/components/persons/components/searchPersons/searchPersons";
import {useGetPersonsBySearchQuery} from "@/services/KinopoiskService";
import {useState} from "react";
import {SearchResult} from "@/components/persons/components/searchResult/searchResult";
import {Item} from "@/components/persons/components/item/item";

export const Persons = () => {
    const [currantPage, setCurrantPage] = useState(1)
    const [search, setSearch] = useState('')
    const {data} = useGetPersonsBySearchQuery({search, currantPage});
    // @ts-ignore
    const {docs, page} = {...data};
    return <>
        <div className={s.body}>
            <SearchPersons submit={setSearch}/>
            <SearchResult>
                {docs?.map(e => <Item/>)}
            </SearchResult>
        </div>
    </>
}