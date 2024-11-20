import styled from 'styled-components';

export const Div = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;
  align-items: center;
  background-color: #f8f9fa;
`;

export const Div2 = styled.div`
  gap: 10px;
  display: flex;
  flex-direction: column;
  label {
    font-size: 20px;
  }
`;

export const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ffffff;
  padding: 10px 20px;
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 600px;
  height: 500px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 40px 0px;
`;

export const Btn = styled.button`
  padding: 8px;
  background-color: white;
  font-size: 16px;
  border: 1px solid black;
  border-radius: 20px;
  margin-right: 10px;
  width: 150px;
  cursor: pointer;

  &:hover {
    background-color: black;
    color: white;
  }
`;

export const Input = styled.input`
  border-radius: 10px;
  width: 403px;
  height: 50px;
  border: 1px solid #ccc;
`;
