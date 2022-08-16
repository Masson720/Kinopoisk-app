import s from "@/components/moreFilm/style.module.scss";
import {Slider} from "@/components/slider/slider";
import {SwiperSlide} from "swiper/react";
import {Item} from "@/components/film/components/infoBlock/item/item";
import React from "react";

export const Actors = ({data}) => {
    return <>
        <div className={s.body}>
            <Slider title={'Actors'} count={data.length}>
                {
                    data.map(e => <SwiperSlide>
                        <Item key={e.id} id={e.id} name={e.name} poster={e.photo} description={e?.description}/>
                    </SwiperSlide>)
                }
            </Slider>
        </div>
    </>
}