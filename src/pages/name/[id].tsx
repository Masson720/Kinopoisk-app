import {Layout} from "@/components/Layout/layout";
import {Person} from "@/components/person/person";
import {GetServerSideProps} from "next";
import {initialStore} from "@/store/store";
import {getPersonById} from "@/services/KinopoiskService";

export default function() {
    return <>
        <Layout>
            <Person/>
        </Layout>
    </>
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const store = initialStore();
    await store.dispatch(getPersonById.initiate(context.query.id))

    return {
        props: {
            initialReduxState: store.getState()
        }
    }
}