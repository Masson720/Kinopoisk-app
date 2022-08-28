import s from './style.module.scss';
import {SearchPersons} from "@/components/persons/components/searchPersons/searchPersons";
import {useGetPersonsBySearchQuery} from "@/services/KinopoiskService";
import {useState} from "react";
import {SearchResult} from "@/components/persons/components/searchResult/searchResult";
import {Item} from "@/components/persons/components/item/item";
import {Pagination} from "@/UI/pagination/pagination";
import {Loader} from "@/UI/loader/loader";

export const Persons = () => {
    const [actualPage, setActualPage] = useState<number>(1);
    const [search, setSearch] = useState('');
    const {data, isFetching, isSuccess} = useGetPersonsBySearchQuery({search, page: actualPage});
    const {docs, pages} = {...data};

    const submit = (s) => {
        setActualPage(1)
        setSearch(s)
    }

    return <>
        <div className={s.body}>
            <SearchPersons submit={submit}/>
            {!isSuccess && <Loader className={s.loader}/>}
            <SearchResult>
                {docs?.map(({id, name, enName, photo, age}) =>
                    <Item id={id}
                          name={name}
                          enName={enName}
                          photo={photo}
                          age={[age]}
                    />)}
            </SearchResult>
            <Pagination actualPage={actualPage}
                        pages={pages}
                        switcher={setActualPage}
                        isLoading={isFetching}
                        isSuccess={isSuccess}
            />
        </div>
    </>
}