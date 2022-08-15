import s from './style.module.scss';
import {Swiper} from "swiper/react";
import 'swiper/css';


export const Slider = ({children, title, count}: any) => {


    return <>
        <div>
            <div>
                <h1 className={s.title}>{title} ({count})</h1>
            </div>

            <Swiper slidesPerView={5}
                    slidesPerGroup={2}
                    spaceBetween={15}
            >
                <div>
                    {children}
                </div>
            </Swiper>
        </div>

    </>
}