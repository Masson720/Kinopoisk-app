// @ts-ignore
import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    filmsLimit: 10
}

export const loadSlice = createSlice({
    name: 'load',
    initialState,
    reducers: {
        loadMoreFilms: state => {
            state.filmsLimit += 10
        },
    }
});

export const {
    loadMoreFilms
} = loadSlice.actions;

export const loadReducer = loadSlice.reducer;