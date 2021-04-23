import React, { useEffect } from 'react';
import styled from 'styled-components';
import { auth, provider } from '../firebase/firebase';
import {useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { selectUserName, selectUserEmail, selectUserPhoto, setUserLoginDetails, setSignOutState} from '../features/users/userSlice';

const Nav = (props) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const userName = useSelector(selectUserName);
    const userEmail = useSelector(selectUserEmail);
    const userPhoto = useSelector(selectUserPhoto);

    useEffect(() => {
        auth.onAuthStateChanged(async (user) => {
            if(user){
                setUser(user);
                history.push("/home"); 
            } 
        })
    }, [userName]);

     
    const handleAuth = () => {
        if (!userName){
            auth.signInWithPopup(provider).then((result) => { 
                setUser(result.user);
            }).catch((error) => {
                alert(error.message);
            });
        }
        else if (userName) {
            auth
              .signOut()
              .then(() => {
                dispatch(setSignOutState());
                history.push("/");
              })
              .catch((err) => alert(err.message));
        }
    };

    const setUser = (user) => {
        dispatch(
            setUserLoginDetails({
                name: user.displayName,
                email: user.email, 
                photo: user.photoURL, 
        })
        );
    };
     
    return (
        <NavBar> 
            <Logo>
                <img src="/images/logo.svg" alt="Disney Logo" />
            </Logo>

            {
                !userName ? 
                <Login onClick={handleAuth}>Login</Login>
                :
                
                <>
                    <NavMenu>
                        <Link to="/home">
                            <a>
                                <img src="/images/home-icon.svg" alt="Home"/>
                                <span>HOME</span> 
                            </a> 
                        </Link>
                        <a>
                            <img src="/images/search-icon.svg" alt="SEARCH"/>
                            <span>SEARCH</span> 
                        </a> 

                        <a>
                            <img src="/images/watchlist-icon.svg" alt="WATCHLIST"/>
                            <span>WATCHLIST</span> 
                        </a> 

                        <a>
                            <img src="/images/original-icon.svg" alt="ORIGINALS"/>
                            <span>ORIGINALS</span> 
                        </a> 

                        <a>
                            <img src="/images/movie-icon.svg" alt="MOVIE"/>
                            <span>MOVIES</span> 
                        </a> 

                        <a>
                            <img src="/images/series-icon.svg" alt="SERIES"/>
                            <span>SERIES</span> 
                        </a> 

                    </NavMenu>
                    <SignOut>
                        <UserImage src={userPhoto} alt={userName}/>
                        
                        <DropDown>
                            <span onClick={handleAuth}> Sign Out </span>
                        </DropDown>
                    </SignOut>
                    
                </>
            }
            

           
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
    cursor: pointer;
    &:hover{
        background-color : #f9f9f9;
        color: #000;
        border-color: transparent;
    }
`;

const UserImage = styled.img`
    border-radius: 100%;
    width: 100%;
`;
const DropDown = styled.div`
    position: absolute;
    top: 40px;
    font-size: 12px;
    right: 0;
    padding: 10px;
    background-color: rgb(19,19,19);
    border:  1px solid rgba(151,151,151, 0.8);
    border-radius: 4px;
    opacity: 0;
    width: 100px;
    box-shadow: rgb(0 0 0 / 50%) 0px 0px 018px 0px;
    letter-spacing: 2px; 
    cursor:pointer;
`;

const SignOut = styled.div`
    position: relative;
    cursor: pointer;
    align-atems: center;
    justify-content: center;
    height: 40px;
    width: 40px;
    display: flex;  
    &:hover{
        ${DropDown}{
            opacity: 1;
            transition-duration: 1.5s;
        }
    }
`;


export default Nav;