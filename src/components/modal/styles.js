import styled from "styled-components";

export const Background = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: rgba(0, 0, 0, 0.8);

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

  form{
    padding: 10px;
    
    display: flex;
    flex-direction: column;

    justify-content: space-between;
    margin-top: 15px;
  }

  label{
    font-size: 12px;
    font-weight: 400;

    color: #F8F9FA;

    margin-left: 5px;
  }

  span{
    width: 98%;
    color: #e63946;
    font-size: 10px;

    text-align: left;

    margin-bottom: 3px;
    margin-left: 5px;
  }

  input{
    margin-top: 5px;
  }

  select{
    width: 100%;
    height: 2.8em;

    font-size: 16px;
    font-weight: 400;

    padding: 5px;

    border-radius: 4px;

    background-color: var(--grey2);
    color: #FFFFFF;
    
    margin-top: 5px;
    margin-bottom: 20px;
  }

`