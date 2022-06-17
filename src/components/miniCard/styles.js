import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 55px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: #121214;

  padding: 25px;

  border-radius: 5px;

  cursor: pointer;

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