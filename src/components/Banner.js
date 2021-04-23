import styled from 'styled-components';
import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Banner = (props) => {

    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        lazyLoad: true, 
        autoplay: true
      };

    return (
        <Carousel {...settings}>
            <Wrap>
                <a>
                    <img src="/images/slider-badag.jpg"/>
                </a>
            </Wrap>

            <Wrap>
                <a>
                    <img src="/images/slider-badging.jpg"/>
                </a>
            </Wrap>

            <Wrap>
                <a>
                    <img src="/images/slider-scales.jpg"/>
                </a>
            </Wrap>

            <Wrap>
                <a>
                    <img src=" /images/slider-scale.jpg"/>
                </a>
            </Wrap>
        </Carousel>
        
        
    );
}

const Carousel = styled(Slider)`
    margin-top: 22px;
    & button {
        opacity: 0;
        z-index: 1;
        height: 100%;
        width: 5vh;
        &:hover {
            opacity: 0.8;
            transition-opacity : 0.2s ease 0s;
        }
    }

    
    ul li button {
      &:before {
        font-size: 10px;
        color: rgb(150, 158, 172); 
      }
    }
    li.slick-active button:before{
        color: white;
    }
    .slick-prev{
        left: -75px;
    }
    .slick-next{
        right: -75px;
    }
    .slick-list{
        overflow: initial;
    }
`;

const Wrap = styled.div`
    cursor: pointer;
    border-radius: 4px; 
    position:relative;
    a{
        border-radius: 4px;
        cursor: pointer;
        display: block;
        position: relative;
        padding: 4px;

        box-shadow: rgb( 0 0 0 /69%) 0px 26px 30px -10px, rgb( 0 0 0 / 73%)0px 16px 10px -10px;
        img {
            width: 100%;
            height: 100%;
            object-fit: contain;
        }

        &:hover{
            padding: 0;
            border: 3px solid rgba(249,249,249, 0.6);
            transition-duration: 300ms;
        }
    }
`;
export default Banner;