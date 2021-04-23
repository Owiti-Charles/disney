import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    recommended : null,
    newMovies: null,
    original: null,
    trending: null
}

const movieslice = createSlice({
    name: "movie",
    initialState,
    reducers: {
        setMovies: (state, action) => {
            state.recommended = action.payload.recommended
            state.newMovies = action.payload.newMovies
            state.original = action.payload.original
            state.trending = action.payload.trending
        },
    },

});

export const { setMovies } = movieslice.actions;

export const recommendedMovie = (state) => state.movie.recommended;
export const newMovie = (state) => state.movie.newMovies;
export const originalMovie = (state) => state.movie.original;
export const trendingMovie = (state) => state.movie.trending;

export default movieslice.reducer;