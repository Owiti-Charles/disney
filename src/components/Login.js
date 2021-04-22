import React from 'react';
import styled from 'styled-components';


const Login = (props) => {
   return(
        <Container>
            <Content>
                <CTA>
                    <CTALogoOne src="/images/cta-logo-one.svg" alt=""/>
                    <SignUp>GET ALL THERE</SignUp>
                    <Description>
                        Get Premier Access to Raya and the Last Dragon 
                        with a Disney+ supscription. As at 04/22/2021
                        and the Dysney Bundle will increase by $1.
                    </Description>
                    <CTALogoTwo src="/images/cta-logo-two.png" alt=""/>
                </CTA>
                <BgImage/>
            </Content>
        </Container>
   )
}

const Container = styled.section`
overflow: hidden;
display: flex;
flex-direction: column;
text-align: center;
height: 100vh;
`;
const Content = styled.div`
margin-bottom: 10vh;
width: 100%;
position: relative;
min-height: 100vh;
box-sizing: border-box;
display: flex;
justify-content:center;
align-items: center; 
flex-direction: column;
padding: 80px 40px;
height: 100%; 
`;
const BgImage = styled.div`
height: 100%; 
background-position: center;
background-size: center;
background-repeat: no-repeat;  
background-image: url("/images/login-background.jpg");
position: absolute;
z-index: -1;
top: 0;
left: 0; 
right: 0;
`;
const CTA = styled.div`
margin-bottom: 2vh;
max-width: 650px;
flex-wrap: wrap;
display: flex;
justify-content:center;
width: 100%;
`;

const CTALogoOne = styled.img`
    margin-bottom: 12px;
    max-width: 600px;
    min-height: 1px;
    diplay: block;
    width:100%; 
`; 

const SignUp = styled.a`
    font-weight: bold;
    color: #f9f9f9;
    background-color: #0063e5;
    width:92%; 
    margin-bottom: 12px;
    letter-spacing: 1.5px;
    padding: 16.5px 0;
    fint-size: 18px;
    border: 1px solid transparent;
    border-radius: 6px;
    cursor: pointer;

&:hover{
    background-color: #0483ee;   
}
`; 
const Description = styled.p`
    color: #f9f9f9; 
    font-size: 11px;
    margin: 0 0 24px;
    width: 92%;
    line-height: 1.5;
    letter-spacing: 1.5px ;   
`;  

const CTALogoTwo = styled.img`
    margin-bottom: 20px;
    max-width: 600px;
    min-height: 1px;
    diplay: inline-block;
    margin-top: 10px;
    width:100%; 
    vertical-align: bottom;
`;
export default Login;