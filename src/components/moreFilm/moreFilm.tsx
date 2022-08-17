import s from './style.module.scss';
import {SwiperSlide} from "swiper/react";
import React from "react";
import {Slider} from "@/components/slider/slider";
import {Item} from "@/components/moreFilm/item/item";

export const MoreFilms = ({data, title, route}) => {

    return <>
        <div className={s.body}>
          <Slider title={title} count={data?.length}>
              {
                  data?.map(e => <SwiperSlide>
                                    <Item key={e.id} id={e.id} name={e.name} poster={e.poster?.previewUrl} />
                                </SwiperSlide>)
              }
          </Slider>
        </div>
    </>
}