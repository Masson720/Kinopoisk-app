import s from './style.module.scss'
import {Header} from "../header/header";

export const Layout = ({children}) => {
    return <>
            <Header/>
            <div>
                {children}
            </div>
        </>
}