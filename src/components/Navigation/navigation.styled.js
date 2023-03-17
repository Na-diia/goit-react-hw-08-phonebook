import styled from "@emotion/styled";
import { NavLink, Link } from "react-router-dom";
import headerIcon from '../../images/icon-phone.png';

export const Item = styled.li`
  position: relative;
  top: 16px;
`;

export const HomeLink = styled(Link)`
  text-decoration: none;
  display: flex;
  position: relative;
  top: -6px;
  left: 30px;
`;

export const Container = styled.div`
  margin-bottom: 15px;
  background-color: inherit;
`;

export const Header = styled.header`
  width: 100%;
  display: flex;
  margin: 0px 0px;
  justify-content: space-between;
  align-items: center;
  padding-left: 15px;
  padding-right: 15px;
   
  &::before {
  content: "";
  background: transparent;
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 5rem;
  box-shadow: rgb(0 0 0 / 30%) 0px 2px 4px;
  z-index: 0;
}
`;

export const List = styled.ul`
  list-style: none;
  display: flex;
`;

export const WrapIcon = styled.div`
  margin-right: 20px;
  width: 70px;
  height: 70px;
  background-image: url(${headerIcon});
  background-size: cover;
  position: relative;
  //top: -8px;
  left:30px;
  margin-left: 30px;
  margin-top: 10px;
  z-index: 1;

  &:hover, &:focus {
    transform: scale(1.25);
  }
     
  @media screen and (max-width: 360px) {
   margin-right: 0px;
   width: 45px;
   height: 45px;
  };
`;

export const HeaderLink = styled(NavLink)`
  text-decoration: none;
  overflow: visible;
  position: relative;
  margin-right: 10px;
  margin-left: 20px;
	border-radius: 10px;
	background-color: rgb(0 0 0 / 70%);
  padding: 10px;
  font-weight: bold;
	font-size: 20px;
	font-family: cambria;
	color: #bccad6;
	border: none;

  &.active {
    box-shadow: 0 0 10px 0 #3498db inset, 0 0 10px 4px #3498db;
  }

  &:hover, &:focus {
    border: 1px solid rgb(0 0 0 / 90%);
    box-shadow: 0 0 10px 0 #3498db inset, 0 0 10px 4px #3498db;
    opacity: 1;
	  text-align: center;
	  background: repeating-linear-gradient(
		45deg, #090979,
		#6087a1 30px,
		#bccad6 30px,
		#bccad6 60px);
	  background-clip: text;
	  color: transparent;
	  animation: 40s linear 0s infinite move;
  }
 
  @keyframes move {
	 from {
		background-position: 0px;}
	to {
		background-position: 1000px;}
   }
  }
`;

export const Title = styled.h2`
  margin-top: 30px;
  z-index: 1;
  font-family: 'Gambetta', serif;
  transition: 700ms ease;
  font-variation-settings: "wght" 311;
  margin-left: 25px;
  font-weight: bold;
  font-size: 28px;
  text-transform: uppercase;
  color: #ddd;
  text-shadow: 3px 3px 10px #000;

  &:hover {
    font-variation-settings: "wght" 582; 
    letter-spacing: 1px;
    }
`;