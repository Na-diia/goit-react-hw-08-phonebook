import styled from "@emotion/styled";

export const Wrap = styled.div`
  display: flex;
  justify-content: center;
  margin-left: 80px;
  margin-right: 35px;
  width: 530px;
  height: 400px;
  border-radius: 5px;
  backdrop-filter: blur(12px);
  background: rgba(3,3,3,0.25);
  box-shadow: 1px 1px 50px #000;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 50%;
  justify-content: center;
  align-items: center;
  margin: 15px;
`;

export const Btn = styled.button`
   display: flex;
   align-items: center;
   padding-top: 10px;
   padding-bottom: 10px;
   padding-left: 20px;
   padding-right: 20px;
   border-radius: 5px; 
   border-color: #3498db;
   color: #fff;
   box-shadow: 0 0 40px 40px #3498db inset, 0 0 0 0 #3498db;
   transition: all 150ms ease-in-out;
   cursor: pointer;
   margin-top: 15px;

   &:hover{
    box-shadow: 0 0 10px 0 #3498db inset, 0 0 10px 4px #3498db;
    color: #3498db;
   }
`;  

export const Title = styled.h2`
   position: relative;
  z-index: 1;
  font-family: 'Gambetta', serif;
  transition: 700ms ease;
  font-variation-settings: "wght" 311;
  margin-left: 25px;
  font-weight: bold;
  font-size: 28px;
  color: #ddd;
  text-shadow: 3px 3px 10px #000;

  &:hover {
    font-variation-settings: "wght" 582; 
    letter-spacing: 1px;
    }
`;