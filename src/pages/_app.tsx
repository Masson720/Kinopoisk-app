import '../styles/global.scss';
import useStore from "../store/store";
import {useRouter} from "next/router";
import {Provider} from 'react-redux';
import {AppProps} from "next/app";



export default function MyApp({ Component, pageProps }: AppProps) {

    const store = useStore(pageProps.initialReduxState);

    const router = useRouter();

    return (
            <Provider store={store}>
                <Component {...pageProps} />
            </Provider>
        )

}