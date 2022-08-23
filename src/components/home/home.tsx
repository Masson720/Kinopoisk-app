import s from './style.module.scss'
import {Slider} from "../slider/slider";
import {useTypedSelector} from "@/hooks/selector";
import {useGetTopQuery} from "@/services/KinopoiskService";
import {Item} from "./components/item/Item";
import {SwiperSlide} from "swiper/react";


export const Home = () => {
    const {filmsLimit} = useTypedSelector(state => state.loadReducer)
    const {data, isSuccess} = useGetTopQuery(filmsLimit);
    const {docs} = data;
    return <>
        <div className={s.ad}>
            <div className={s.title}>Доктор Стрэндж</div>
            <img className={s.img} src={'https://gamemag.ru/images/cache/News/News168841/9af1263ae0-2_1390x600.jpg'}/>
        </div>
        <div className={s.topBlock}>

        </div>
        <div className={s.topBlock}>
            <Slider title={'New Film'} count={docs.length}>
                {docs?.map(e =>
                    <SwiperSlide>
                        <Item key={e.id}
                        name={e.name}
                        id={e.id}
                        poster={e.poster}
                        rating={e.rating}
                        year={e.year}/>
                    </SwiperSlide>
                )}
            </Slider>
        </div>
    </>
}

