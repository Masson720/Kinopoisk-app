import s from './style.module.scss';
import Link from "next/link";
import Image from "next/image";

export const Item = ({name, id, poster}) => {
    return <>
        <div className={s.body}>
            <li className={s.link}>
                <Link href={`/film/${id}`}>
                    <a>
                        <Image className={s.poster}
                               src={poster?.previewUrl}
                               alt={name}
                               layout="fill"
                        />
                    </a>
                </Link>
            </li>
        </div>
        <h1 className={s.title}>{name}</h1>
    </>
}