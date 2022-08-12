import '../styles/global.scss';
import useStore from "../store/store";
// @ts-ignore
import {useRouter} from "next/router";
// @ts-ignore
import {Provider} from 'react-redux';
// @ts-ignore
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