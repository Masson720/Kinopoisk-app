import s from './style.module.scss';
import {Item} from "./components/item";
import {FC} from "react";
import {Pagination} from "@/UI/pagination/pagination";
import {Loader} from "@/UI/loader/loader";



export const ItemsPage: FC<any> = ({docs, page, pages, switcher, isFetching, isSuccess}) => {

    return <>
        <div className={s.body}>
            {isSuccess ?
                docs?.map(e => <Item docs={e}/>)

                :
                <Loader className={s.loader}
                />
            }
            <Pagination
                actualPage={page}
                pages={pages}
                switcher={switcher}
                isLoading={isFetching}
                isSuccess={isSuccess}
            />
        </div>
    </>
}