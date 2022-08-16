import s from './style.module.scss';
import {InfoBlock} from "./infoBlock/InfoBlock";
import Image from 'next/image';
import {useRouter} from "next/router";
import { useGetPersonByIdQuery, useGetFilmsByIdQuery} from '@/services/KinopoiskService';
import React, { Fragment } from "react";

export const Description = () => {
    const {query: {id}} = useRouter();
    const {data, isSuccess} = useGetPersonByIdQuery(id);
    console.log(data)
    const {age,
        birthPlace,
        countAwards,
        death,
        deathPlace,
        enName,
        facts,
        growth,
        movies,
        name,
        photo,
        profession,
        sex,
        birthday,
        spouses
        } = {...data}

    const items = [
        {meaning: 'Career', value: profession?.map((e, id) => <Fragment key={id}>{id ? ', ' : ''}{e.value}</Fragment>), condition: profession?.length},
        {meaning: 'Sex', value: sex, condition: sex},
        {meaning: 'Growth', value: growth, condition: growth},
        {meaning: 'Date of Birth', value: birthday, condition: birthday},
        {meaning: 'birth Place', value: birthPlace?.map((e, id) => <Fragment key={id}>{id ? ', ' : ''}{e.value}</Fragment>), condition: birthPlace?.length},
        {meaning: 'Films', value: movies?.length, condition: movies?.length},
        {meaning: 'Wife',
            value: spouses?.map((e, id) =>
                <Fragment key={id}>{id ? ', ' : ''}{e.name}{e.divorced ? e.divorcedReacon : null}</Fragment>),
            condition: spouses?.length}
    ]

    const query = movies?.map(e => `search=${e.id}&field=id`).join('&')
    const {data: moviesOfPerson} = useGetFilmsByIdQuery({query, limit: movies?.length})

    return <>
        <div className={s.main}>
            <div>
                <img className={s.poster}
                       src={photo}
                />
            </div>

            <div className={s.info}>
                <h1>{name}</h1>
                <span className={s.engTitle}>{enName}</span>
                <h2>About the person</h2>
                <ul>
                    {
                        items.map(e => <li>
                            <span className={s.property}>
                                {e.meaning}
                            </span>
                            <span className={s.meaning}>
                                {e.condition ? e.value : '-'}
                            </span>
                        </li>)
                    }
                </ul>
            </div>
        </div>
        <InfoBlock data={moviesOfPerson} facts={facts}/>
    </>
}