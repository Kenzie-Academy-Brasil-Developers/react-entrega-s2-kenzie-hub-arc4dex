import styled from "styled-components";

export const ThemeButton = styled.button`
  width: 100%;
  height: 2.7em;

  font-size: 16px;
  font-weight: 500;

  margin-top: 15px;

  border-radius: 4px;
  border: none;

  background-color: ${(props) => (props.color ? '#59323F' : '#212529') };

  :hover{
    background-color: ${(props) => (props.color ? '#FF427F' : '#868E96')};

  }
`