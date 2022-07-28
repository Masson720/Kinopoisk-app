import s from './style.module.scss'
import {Header} from "../header/header";
import {Footer} from "../footer/footer";

export const Layout = ({children}) => {
    return <>
            <Header/>
            <div>
                {children}
            </div>
        <Footer/>
        </>
}