import s from './style.module.scss';
import {useState} from "react";
import {Item} from "./components/item/item";


export const Slider = ({docs, total, limit, page, pages}: any) => {
    const [move, setMove] = useState({transform: 'translateX(0px)'});
    const [maxShift, setMaxShift] = useState(800)
    const [transform, setTransform] = useState(0);

    const switcher = (e: boolean) => {
        let shift = transform;
        if(!!e){
            if(shift > 0){
                shift -= 400;
                setTransform(shift);
            }
        }else if(shift < maxShift){
            shift += 400;
            setTransform(shift);
        }
        setMove({
            ...move, transform: `translateX(-${shift}px)`
        });
    }

    return <>
        <div className={s.body}>
            <div className={s.borderButton}
                 onClick={() => switcher(true)}
            >
                <button className={s.button + ' ' + s.left}>{'>'}</button>
            </div>

            <div className={s.slider} >
                <div className={s.sliderLine} style={move}>
                    {
                        docs.map(e => <Item
                            id={e.id}
                            name={e.name}
                            poster={e.poster.previewUrl}
                            year={e.year}
                            rating={e.rating.kp}
                        />)
                    }
                </div>

            </div>
            <div className={s.borderButton}
                 onClick={() => switcher(false)}
            >
                <button className={s.button + ' ' + s.right}>{'<'}</button>
            </div>
        </div>
    </>
}