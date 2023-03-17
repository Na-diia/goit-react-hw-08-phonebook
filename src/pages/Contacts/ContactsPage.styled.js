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


export const ContactsWrap = styled.div`
   display: flex;
`;

export const Box = styled.div`
   display: flex;
`;