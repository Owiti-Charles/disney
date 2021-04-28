import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    seriesList: null
}

const seriesSlice = createSlice({
    name : "series",
    initialState,
    reducers: {
        setSeries: (state, action)=>{
            state.seriesList = action.payload.seriesList
        },
    },
});

export const { setSeries } = seriesSlice.actions;

export const seriesList = (state) => state.series.seriesList;

export default seriesSlice.reducer;