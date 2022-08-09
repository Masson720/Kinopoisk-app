import {Layout} from "../../components/Layout/layout";
import Film from "../../components/film/film";
import {useGetFilmByIdQuery} from '../../services/KinopoiskService'
// @ts-ignore
import {useRouter} from "next/router";


export default function(){
    const {query: {id}} = useRouter()

    return <>
        <Layout>
            <Film id={id}/>
        </Layout>

    </>
}
