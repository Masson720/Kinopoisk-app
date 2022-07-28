import {Layout} from "../components/Layout/layout";
import {Navbar} from "../components/navbar/navbar";
import {Home} from "../components/home/home";

export default function index (){
    return <>
        <Layout>
            <Navbar>
                <Home/>
            </Navbar>
        </Layout>
    </>
}