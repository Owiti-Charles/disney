import styled from 'styled-components';
import React, { useEffect } from 'react';
import Banner from './Banner';
import Group from './Group';
import Recommended from './Recommended';
import Trending from './Trending';
import New from './New';
import Originals from './Originals';
import { useDispatch, useSelector } from 'react-redux';
import db from '../firebase/firebase';
import { newMovie, setMovies } from '../features/movies/movieSlice';
import  { selectUserName } from '../features/users/userSlice';

const Home = (props) => {

    const dispatch = useDispatch(); 
    let userName = useSelector(selectUserName);
    let recommendDisney = [];
    let newDisney = [];
    let trendingDisney = [];
    let originalDisney = [];
    useEffect(() => {
      db.collection("movies").onSnapshot((snapshot) => {
         snapshot.docs.map((doc) => {
            switch(doc.data().type){
                case 'trending':
                    trendingDisney = [...trendingDisney, {id: doc.id, ...doc.data()}]
                    break;
                case 'recommend':
                    recommendDisney = [...recommendDisney, {id: doc.id, ...doc.data()}]
                    break;
                case 'original':
                    originalDisney = [...originalDisney, {id: doc.id, ...doc.data()}]
                    break;
                case 'new':
                    newDisney = [...newDisney, {id: doc.id, ...doc.data()}]
                    break;
            }
         });
        dispatch(setMovies({
            recommended: recommendDisney,
            newMovies: newDisney,
            original: originalDisney,
            trending: trendingDisney 
          })
          );
      });
    },[userName]);

    return(
        <Container>   
             <Banner />
             <Group />
             <Recommended />
             <Trending />
             <New />
             <Originals />
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
  background: url("/images/home-background.png") center center / cover
      no-repeat fixed;
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

export default Home;