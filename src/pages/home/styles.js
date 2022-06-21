import styled from "styled-components";

export const ContainerMain = styled.div`
  width: 100%;
  height: auto;

  display: flex;
  flex-direction: column;

  margin-top: 30px;

  .containerUsuario{
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    align-items: center;

    margin-bottom: 15px;
    margin-top: 20px;
  }

  .bemVindo{
    margin-top: 15px;
    margin-bottom: 15px;
  }

  .modulo{
    font-size: 10px;
    color: var(--grey1)
  }

  .btnAdd{
    width:35px;
    height: 32px;

    border-radius: 4px;
    border: none;

    background-color: var(--grey3);
    color: #FFFFFF;

    font-size: 20px;
    font-weight: 800;

    :hover{
      background-color: var(--grey1);
    }
  }
`

export const Container = styled.div`
  width: 48em;
  height: auto;

  border-radius: 8px;

  background-color: #212529;

  padding: 20px;

  .headerDashboard{
    margin-top: 50px;
  }
`

