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
  height: 42em;
  
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

`

export const FormCadastro = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;

  padding: 20px;
`
