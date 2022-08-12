import s from './style.module.scss';
import {Swiper, SwiperSlide} from "swiper/react";
import {Item} from "@/components/film/components/infoBlock/item/item";

export const MoreFilms = ({data}) => {


    return <>
        <div className={s.body}>
            <h1>Similar films ({data.length})</h1>
            <Swiper slidesPerView={4}
                    slidesPerGroup={2}
                    spaceBetween={15}>

                {data.map(e =>
                    <SwiperSlide>
                        <Item id={e.id}
                              poster={e.poster}
                              name={e.name} />
                    </SwiperSlide>)}
            </Swiper>
        </div>
    </>
}