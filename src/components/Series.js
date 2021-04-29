import styled from 'styled-components';
import Banner from './Banner';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';
import  { selectUserName } from '../features/users/userSlice';
import { setSeries } from '../features/series/seriesSlice';
import Serie from './Serie';
import { useParams } from "react-router-dom";
import BounceLoader from "react-spinners/BounceLoader";

const apiKey = "3398b411aabf78b7d423c667c60ee23f";

const Series = (props) => {
    let { selector } = useParams();
    let userName = useSelector(selectUserName);
    const dispatch = useDispatch();
    const [loader, setLoader] = useState(true); 

    useEffect(() => {
        async function fetchSeries (){
            const request = await axios.get(`https://api.themoviedb.org/3/tv/${selector}?api_key=${apiKey}`)
            setLoader(false);
            dispatch(setSeries({
                seriesList:request.data.results
            })
            );
        }
        fetchSeries();
    },[selector, userName])
    return (
        <Container>
            <Banner/>
            {loader ? 
            <Spinner>
                <BounceLoader color="#53CCF3" loading={loader} size={40} />
            </Spinner>
                
            :
            <Serie selector = {selector}/>
            }
            
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
const Spinner = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    width: 100%;
`;
export default Series;