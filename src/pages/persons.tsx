import {Layout} from "@/components/Layout/layout";
import { Navbar } from "@/components/navbar/navbar";
import {Persons} from "@/components/persons/persons";


const PersonsPage = () => {
    return <>
        <Layout>
            <Navbar>
                <Persons/>
            </Navbar>
        </Layout>
    </>
}

export default PersonsPage;