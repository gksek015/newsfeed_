import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 56px);
  background: #f8f9fa;
`;

export const StyledForm = styled.form`
  background: #ffffff;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 600px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  gap: 5px;
`;

export const Label = styled.label`
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 5px;
`;

export const Input = styled.input`
  padding: 12px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 1px;
  outline: none;

  &:focus {
    border-color: #3676e8;
    box-shadow: 0 0 3px rgba(76, 175, 80, 0.2);
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 15px;
`;

export const Button = styled.button`
  padding: 8px;
  font-size: 16px;
  background-color: white;
  border: 1px solid black;
  border-radius: 20px;
  width: 150px;
  cursor: pointer;

  &:hover {
    background-color: black;
    color: white;
  }
`;

export const Span = styled.span`
  color: red;
  font-size: 10px;
`;
