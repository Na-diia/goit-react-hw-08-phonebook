import styled from '@emotion/styled';

export const WrapForm = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  width: 660px;
  height: 350px;
  border-radius: 5px;
  backdrop-filter: blur(12px);
  background: rgba(3,3,3,0.25);
  box-shadow: 1px 1px 50px #000;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 15px;
  width: 50%;
`;

export const Title = styled.h1`
  font-family: 'Open Sans Condensed', sans-serif;
  position: relative;
  margin-top: 0px;
  text-align: center;
  font-size: 40px;
  color: #ddd;
  text-shadow: 3px 3px 10px #000;
`;

export const Input = styled.input`
 font-family: 'Open Sans Condensed', sans-serif;
 position: relative;
 width: 80%;
 display: block;
 margin: 9px auto;
 font-size: 17px;
 color: #fff;
 padding: 8px;
 border-radius: 6px;
 border: none;
 background: rgba(3,3,3,.1);
 transition: all 0.2s ease-in-out;
   }

  &:focus{
  outline: none;
  box-shadow: 3px 3px 10px #333;
  background: rgba(3,3,3,.18);}
`;