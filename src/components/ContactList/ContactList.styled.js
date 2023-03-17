import styled from "@emotion/styled";
import iconRemove from '../../images/iconRemove.png';

export const Item = styled.li`
  display: flex;
  align-items:center;
  justify-content: space-between;
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 5px;
  backdrop-filter: blur(12px);
  background: rgba(3,3,3,0.25);
  box-shadow: 1px 1px 50px #000;
`;

export const List = styled.ul`
  margin-top: 8px;
  margin-left: 35px;
`;

export const Text = styled.p`
   font-size: 18px;
   font-weight: 500;
   color: #090979;
   font-style: italic;
`;

export const BtnDelete = styled.button`
  cursor: pointer;
  transition: all .2s;
  border: none;
  width: 50px;
  height: 50px;
  background-color: transparent;
  background-image: url(${iconRemove});
  background-size: cover;
  position: relative;
  z-index: 1;
   
  &:hover, &:focus {
    transform: scale(1.25);
  }
`;