import styled from "styled-components";

export const Background = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: rgba(0, 0, 0, 0.5);

  position: fixed;

  inset: 0;

  z-index: 101;
`

export const Container = styled.div`
  width: 22.5em;
  height: auto;

  background-color: var(--grey3);

  border-radius: 4px;

  margin: auto;
  
  div{
    display: flex;
    justify-content: space-between;

    padding: 15px;

    background-color: var(--grey2);

    border-radius: 4px 4px 0 0;

  }

  h2{
    font-size: 14px;
    font-weight: 700;

    color: #F8F9FA;

  }

  .btnFecharModal{
    width: 25px;

    font-weight: 800;

    background-color: transparent;
    
    border: none;
    
  }

  .containerBtns{
    width: 100%;
  }

  .btnRemoved{
    width: 45%;
    height: 2.7em;

    font-size: 16px;
    font-weight: 500;

    border-radius: 4px;
    border: none;

    background-color: var(--purple);

    :hover{
      background-color: var(--pink);
    }
  }
`