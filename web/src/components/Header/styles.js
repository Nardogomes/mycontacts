import styled from 'styled-components';

export const Container = styled.header`
  margin-top: 74px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const InputSearchContainer = styled.div`
  margin-top: 48px;
  width: 100%;

  input {
    width: 100%;
    height: 50px;
    padding: 0 16px;
    background: #FFF;
    border: none;
    border-radius: 25px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    outline: none;

    &::placeholder {
      color: #BCBCBC;
    }
  }
`;
