// @ts-ignore
import {createSlice} from "@reduxjs/toolkit";


const initialState = {
    filters: {
        year: `1888-2022`,
        rating: '1-10',
        sortByRelease: '-1',
        genre: '',
        type: '1'
    }
}

export const filtersSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        setYear: (state, action) => {
            state.filters.year = action.payload
        },
        setRatings: (state, action) => {
            state.filters.rating = action.payload
        },
        setSortByRelease: (state, action) => {
            state.filters.sortByRelease = action.payload
        },
        setGenre: (state, action) => {
            state.filters.genre = action.payload
        },
        setType: (state, action) => {
            state.filters.type = action.payload
        },
        resetFilters: (state) => {
            state.filters = initialState.filters
        }
    }
})

export const {
    setYear,
    setRatings,
    setSortByRelease,
    setGenre,
    resetFilters,
    setType
} = filtersSlice.actions;

export const filtersReducer = filtersSlice.reducer;