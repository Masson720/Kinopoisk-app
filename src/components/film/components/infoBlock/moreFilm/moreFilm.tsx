import s from './style.module.scss';
import {SwiperSlide} from "swiper/react";
import {Item} from "@/components/film/components/infoBlock/item/item";
import React from "react";
import {Slider} from "@/components/slider/slider";

export const MoreFilms = ({data}) => {

    return <>
        <div className={s.body}>
          <Slider title={'Similar Films'} count={data.length}>
              {
                  data.map(e => <SwiperSlide>
                                    <Item key={e.id} id={e.id} name={e.name} poster={e.poster} />
                                </SwiperSlide>)
              }
          </Slider>
        </div>
    </>
}