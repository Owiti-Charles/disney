import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import userReducer from '../features/users/userSlice';
import movieReducer from '../features/movies/movieSlice'; 
import seriesReducer from '../features/series/seriesSlice';

export default configureStore({
    reducer: {
        user: userReducer,
        movie: movieReducer,
        series: seriesReducer,
     },
    middleware: getDefaultMiddleware({
        serializableCheck:false, 
    }),
});