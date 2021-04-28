import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import userReducer from '../features/users/userSlice';
import movieReducer from '../features/movies/movieSlice'; 
import seriesReducer from '../features/series/seriesSlice';
import dbMoviesReducer from '../features/dbMovies/dbMovies';

export default configureStore({
    reducer: {
        user: userReducer,
        movie: movieReducer,
        series: seriesReducer,
        movies: dbMoviesReducer,
     },
    middleware: getDefaultMiddleware({
        serializableCheck:false, 
    }),
});