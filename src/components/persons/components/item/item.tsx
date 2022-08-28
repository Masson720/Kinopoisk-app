import s from './style.module.scss'
import Link from "next/link";

export const Item = ({id, name, enName, photo, age}) => {
    return <>
        <Link href={`name/${id}`}>
            <div className={s.body}>
                <img className={s.photo} src={photo} alt=""/>
                <div className={s.info}>
                    <h1 className={s.title}>{name}</h1>
                    <span className={s.engTitle}>{enName}</span>
                    <p className={s.age}>Age {age}</p>
                </div>
            </div>
        </Link>
    </>
}