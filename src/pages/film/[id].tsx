import {Layout} from "@/components/Layout/layout";
import {Film} from "@/components/film/film";
import {useRouter} from "next/router";


export default function(){
    const {query: {id}} = useRouter()

    return <>
        <Layout>
            <Film id={id}/>
        </Layout>

    </>
}
