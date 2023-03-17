import styled from '@emotion/styled';
import logout from '../../images/logout.png';

export const Item = styled.li`
    display: flex;
`;

export const Mail = styled.p`
  position: relative;
  top: -1px;
  margin-left: 15px;
  font-size: 18px;
  color: #090979;
  font-family: 'Gambetta', serif;
  transition: 700ms ease;
  font-variation-settings: "wght" 311;
`;

export const LogOut = styled.button`
transition: all .2s;
cursor: pointer;
border: none;
//margin-left: 20px;
top: -8px;
width: 70px;
height: 70px;
background-color: transparent;
background-image: url(${logout});
background-size: cover;
position: relative;
z-index: 2;

&:hover, &:focus {
  transform: scale(1.25);;
}
`;