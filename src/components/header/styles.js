import styled from "styled-components";

export const Container = styled.div`
  width: ${(props) => props.small ? '23em' : '48em' };
  
  display: flex;
  justify-content: space-between;

  margin-bottom: 10px;
`

export const ButtonLogin = styled.button`
  width: 8em;
  height: 40px;

  background-color: var(--grey3);

  font-size: 12px;
  font-weight: 600;

  border-radius: 8px;

  :hover{
    background-color: var(--grey1);
  }
`