import styled from "@emotion/styled";
import background from '../../images/bg-img-1.jpg';

export const Container = styled.div`
   max-width: 1300px;
   height: 100vh;
   margin: 0px 0px;
   padding: 0px 0px;
  
   &::before {
    content: "";
    background-image: url(${background});
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    position: fixed;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    z-index: -10;
    opacity: 0.7;
}`;

export const Title = styled.h2`
display: flex;
justify-content: center;
z-index: 1;
margin:0;
margin-top: 15px;
font-family: 'Gambetta', serif;
transition: 700ms ease;
font-variation-settings: "wght" 311;
font-weight: bold;
font-size: 28px;
color: #ddd;
text-shadow: 3px 3px 10px #000;
`;

export const HomeBox = styled.div`
// display: flex;
// justify-content: center;
//aligns-items: center;
// flex-direction: column;
position: absolute;
top: 0;
left: 0;
right: 0;
bottom: 0;
margin: auto;
width: 500px;
height: 300px;
border-radius: 5px;
backdrop-filter: blur(12px);
background: rgba(3,3,3,0.25);
box-shadow: 1px 1px 50px #000;
padding: 10px 15px;
`;

export const Text = styled.h2`
display: flex;
justify-content: center;
z-index: 1;
margin:0;
margin-top: 15px;
font-family: 'Gambetta', serif;
transition: 700ms ease;
font-variation-settings: "wght" 311;
font-weight: bold;
font-size: 26px;
font-style: italic;
line-height: 1.2;
text-shadow: 3px 3px 13px #000;
`;
