import styled from "styled-components";

export const Container = styled.ul`
  width: 100%;
  height: 55px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: #121214;

  padding: 25px;

  border-radius: 5px;

  margin-bottom: 10px;

  cursor: pointer;

  li{
    width: 100%;
    display: flex;

    justify-content: space-between;
    align-items: center;
  }

  div{
    display: flex;
  }

 
  h1{
    font-size: 13px;
    font-weight: 700;

    color: #ffffff;
  }

  h3{
    font-size: 12px;
    font-weight: 400;

    color: var(--grey1);

    margin-right: 15px;
  }

  img{
    max-width: 15px;
    
  }

  :hover{
    background-color: #343B41;
  }
`