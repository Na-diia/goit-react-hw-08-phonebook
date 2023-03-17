import styled from "@emotion/styled";

export const Wrap = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  width: 660px;
  height: 400px;
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
   margin: 10px;
   width: 50%;
`;