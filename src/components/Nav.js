import React from 'react';
import styled from 'styled-components';
import { auth, provider } from '../firebase/firebase';

const Nav = (props) => {

    const handleAuth = () => {
        auth.signInWithPopup(provider).then((result) => { 
            console.log(result);
        }).catch((error) => {
            alert(error.message);
        });
    }
     
    return (
        <NavBar> 
            <Logo>
                <img src="/images/logo.svg" alt="Disney Logo" />
            </Logo>
            <NavMenu>
                <a href= "/">
                    <img src="/images/home-icon.svg" alt="Home"/>
                    <span>HOME</span> 
                </a> 

                <a href= "/">
                    <img src="/images/search-icon.svg" alt="SEARCH"/>
                    <span>SEARCH</span> 
                </a> 

                <a href= "/watchlist">
                    <img src="/images/watchlist-icon.svg" alt="WATCHLIST"/>
                    <span>WATCHLIST</span> 
                </a> 

                <a href= "/original">
                    <img src="/images/original-icon.svg" alt="ORIGINALS"/>
                    <span>ORIGINALS</span> 
                </a> 

                <a href= "/movies">
                    <img src="/images/movie-icon.svg" alt="MOVIE"/>
                    <span>MOVIES</span> 
                </a> 

                <a href= "/series">
                    <img src="/images/series-icon.svg" alt="SERIES"/>
                    <span>SERIES</span> 
                </a> 
                
            </NavMenu>

            <Login onClick={handleAuth}>Login</Login>
        </NavBar> 

    );
}
const NavBar = styled.nav`
    position: fixed;
    top: 0;
    left:0;
    right: 0;
    height: 60px;
    background-color: #090b13;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 36px;
    letter-spacing: 16px; 
    z-index: 3;
`;

const Logo = styled.a`
    width: 80px;
    margin-top: 4px;
    max-height: 70px;
    font-size: 0px;
    display: inline-block;
    padding-bottom: 10px;

    img {
        display: block;
        width: 100%;
    }
`;

const NavMenu = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex-flow: row nowrap;
    height: 100%;
    padding: 0px;
    position: relative;
    margin-right: auto; 
    margin-left : 25px; 

    a{
        display: flex; 
        align-items: center;
        padding: 0 12px; 

        img{
            height: 20px;
            min-width: 20px;
            width: 20px;
            z-index: auto;
        }

        span{ 
            color:rgb(249,249,249);
            font-size: 13px;
            letter-spacing: 1.42px;
            line-height: 1.08px;
            padding 2px 0px;
            position: relative;
            white-space: nowrap;

            // border line
            &:before{
                background-color: rgb(249, 249, 249);
                border-radius: 0px 0px 4px 4px;
                bottom: -8px;
                content: "";
                opacity: 1;
                left: 0px;
                height: 2px;
                position: absolute;
                right: 0px;
                transform-origin: left center;
                transform: scaleX(0);
                transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94)0s;
                visibility: hidden;
                width: auto;
            }
        }
        &:hover {
            span:before{
                transform: scaleX(1);
                visibility: visible;
                opacity: 1 !important;
            }
        }   
    }
    @media (max-width: 768px) {
        display: none;
    }
`;

const Login = styled.a`
    background-color : rgba(0,0,0, 0.6);
    padding: 8px 16px;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    border:1px solid #f9f9f9;
    border-radius: 4px;
    transition: all 250ms ease-out;
    &:hover{
        background-color : #f9f9f9;
        color: #000;
        border-color: transparent;
    }
`;

export default Nav;