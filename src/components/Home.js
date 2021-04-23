import styled from 'styled-components';
import React from 'react';
import Banner from './Banner';
import Group from './Group';

const Home = (props) => {
    return(
        <Container> 
             <Banner/>
             <Group/>
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