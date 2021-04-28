import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    movieList: null
}

const movieSlice = createSlice({
    name : "movies",
    initialState,
    reducers: {
        setMovies: (state, action)=>{
            state.movieList = action.payload.movieList
        },
    },
});

export const { setMovies } = movieSlice.actions;

export const movieList = (state) => state.movies.movieList;

export default movieSlice.reducer;