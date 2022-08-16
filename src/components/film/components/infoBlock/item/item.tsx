import s from './style.module.scss';
import Link from "next/link";
import Image from "next/image";

export const Item = ({name, id, poster, description =  null}) => {

    return <>
        <div className={s.body}>
            <li className={s.link}>
                <Link href={`/person/${id}`}>
                    <a>
                        <Image className={s.poster}
                               src={poster}
                               alt={name}
                               layout="fill"
                        />
                    </a>
                </Link>
            </li>
        </div>
        <h1 className={s.title}>{name}</h1>
        <span>{description}</span>
    </>
}