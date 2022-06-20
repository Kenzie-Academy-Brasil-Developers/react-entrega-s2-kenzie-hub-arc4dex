
import styled from "styled-components";

export const Container = styled.div`
  width: 23em;
  height: 28em;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  
  background-color: var(--grey3);

  border-radius: 8px;

  h1{
    font-size: 18px;
    font-weight: 700;

    color: #F8F9FA;

    margin-top: 30px;
  }

  label{
    width: 97%;
    text-align: left;

    margin-bottom: 5px;

    font-size: 12px;
    font-weight: 400;

    color: #F8F9FA;
  }

  span{
    width: 98%;
    color: #e63946;
    font-size: 10px;

    text-align: left;

    margin-bottom: 3px;
  }

  p{
    font-size: 12px;
    font-weight: 600;

    color: var(--grey1);

    margin-top: 10px;
  }
`
export const ContainerImg = styled.div`
    width: 23em;

    display: flex;
    justify-content: center;
    align-items: center;

    margin-bottom: 35px;
    margin-top: 80px;
`