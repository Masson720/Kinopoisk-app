// @ts-ignore
import {configureStore} from "@reduxjs/toolkit";


let store: AppStoreType

export const initialState = (preloadedState = {}) => {
    return configureStore(
        {
            reducer: {

            },
            preloadedState,
            middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat()
        });
}

export type AppStoreType = ReturnType<typeof initialState>