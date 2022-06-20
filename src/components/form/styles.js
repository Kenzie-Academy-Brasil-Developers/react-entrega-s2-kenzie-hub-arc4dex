import styled from "styled-components";
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

export const CustomSelect = styled(Select)`
  background-color: var(--grey2);
`

export const CustomMenuItem = styled(MenuItem)`
  background-color: black;
`

export const Container = styled.div`
  width: 23em;
  height: auto;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  
  background-color: var(--grey3);

  border-radius: 8px;

  div{
    display: flex;
    flex-direction: column;

    margin-top: 10px;

    width: 100%;

    align-items: center;

  }

  h1{
    font-size: 18px;
    font-weight: 700;

    color: #F8F9FA;
  }

  h3{
    font-size: 12px;
    font-weight: 400;

    color: var(--grey1);
  }

  label{
    width: 98%;
    text-align: left;

    font-size: 12px;
    font-weight: 400;

    color: #F8F9FA;

    margin-bottom: 3px;
  }

  span{
    width: 98%;
    color: #e63946;
    font-size: 10px;

    text-align: left;

    margin-bottom: 3px;
  }

  select{

    width: 100%;
    height: 2.8em;

    font-size: 16px;
    font-weight: 400;

    padding: 5px;

    border-radius: 4px;
    border: none;

    background-color: var(--grey2);
    color: #FFFFFF;
    
    margin-top: 5px;
    margin-bottom: 20px;
  }

  option{
    font-size: 14px;
    border-style: none;
  }

`

export const FormCadastro = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;

  padding: 20px;

`
