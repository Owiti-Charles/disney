import styled from 'styled-components';
import Banner from './Banner';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';
import  { selectUserName } from '../features/users/userSlice';
import { setSeries } from '../features/series/seriesSlice';
import Serie from './Serie';


const apiKey = "3398b411aabf78b7d423c667c60ee23f";


const Series = (props) => {
    let userName = useSelector(selectUserName);
    const dispatch = useDispatch(); 

    useEffect(() => {
        async function fetchSeries (){
            const request = await axios.get(`https://api.themoviedb.org/3/tv/popular?api_key=${apiKey}`)
            dispatch(setSeries({
                seriesList:request.data.results
            })
            );
        }
        fetchSeries();
    },[userName])
    return (
        <Container>
            <Banner/>
            <Serie/>
        </Container>
    );

    
}
const Container = styled.main`
    position: relative;
    min-height: calc(100vh - 250px);
    overflow-x: hidden;
    display: block;
    padding: 0 calc(3.5vw + 5px);
    top: 61px;
    &:after {
      background: url("/images/home-background.png") center center / cover
        no-repeat fixed;
      content: "";
      position: absolute;
      inset: 0px;
      opacity: 1;
      z-index: -1;
    }     
`;
export default Series;