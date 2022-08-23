import {Layout} from "@/components/Layout/layout";
import {Film} from "@/components/film/film";
import {useRouter} from "next/router";
import {GetServerSideProps} from "next";
import {initialStore} from "@/store/store";
import {getFilmById} from "@/services/KinopoiskService";


const FilmPage = (props) => {
    const {query: {id}} = useRouter()

    return <>
        <Layout>
            <Film/>
        </Layout>

    </>
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const store = initialStore();
    await store.dispatch(getFilmById.initiate(context.query.id));

    return {
        props: {
            initialReduxState: store.getState()
        }
    }
}

export default FilmPage;
