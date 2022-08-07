// @ts-ignore
import {configureStore} from "@reduxjs/toolkit";
import {kinopoiskAPI} from "../services/KinopoiskService";
import {useMemo} from "react";
// @ts-ignore
import {createWrapper} from "next-redux-wrapper";
import {loadReducer} from "./reducers/loadReducer";
import {filtersReducer} from "./reducers/filterReducer";


let store: AppStoreType

export const initialStore = (preloadedState = {}) => {
    return configureStore(
        {
            reducer: {
                loadReducer,
                filtersReducer,
                [kinopoiskAPI.reducerPath]: kinopoiskAPI.reducer
            },
            preloadedState,
            middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(kinopoiskAPI.middleware)
        });
}

export const initializeStore = (preloadedState) => {
    let _store = store ?? initialStore(preloadedState);

    if(preloadedState && store){
        _store = initialStore({...store.getState(), ...preloadedState});
    }

    if(typeof window === 'undefined') return _store;
    if(!store) store = _store;

    return _store
}

export default function useStore(initialState: RootState){
    const store = useMemo(() => initializeStore(initialState), [initialState]);
    return store;
}

export type RootState = ReturnType<AppStoreType['getState']>

export type AppStoreType = ReturnType<typeof initialStore>

export const wrapper = createWrapper<AppStoreType>(initialStore, {debug: false})