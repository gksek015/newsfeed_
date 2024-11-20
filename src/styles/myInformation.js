import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  min-height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #f8f9fa;
`;

export const Container = styled.div`
  border-radius: 10px;
  width: 60%;
  height: 80%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: white;
  box-shadow: 1px 10px 10px rgba(1, 1, 1, 0.3);
`;

export const ContainerLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 60%;
  height: 100%;
`;

export const ContainerRight = styled.div`
  width: 40%;
  height: 60%;
  padding: 130px 0 0 20px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const ProfileImgBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 40%;
`;

export const ProfileImg = styled.img`
  width: 200px;
  height: 200px;
  box-shadow: 1px 1px 10px rgba(1, 1, 1, 0.3);
  border-radius: 50%;
  object-fit: contain;
`;

const Button = styled.button`
  border-radius: 20px;
  border: 1px solid black;
  background-color: white;
  padding: 10px 15px;
  font-size: 1.2rem;
  color: black;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
  &:hover {
    color: white;
    background-color: black;
    font-weight: bold;
  }
`;

export const ImgBtnBox = styled.div`
  width: 50%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 100px;
`;

export const SelectBtnBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 40%;
`;

export const DeleteImgBtn = styled(Button)``;

export const FileInput = styled.input`
  display: none;
`;

export const SelectImg = styled.label`
  display: block;
  border-radius: 20px;
  border: 1px solid black;
  line-height: 1.3;
  padding: 10px 20px;
  font-size: 1.2rem;
  color: black;
  background-color: white;
  cursor: pointer;
  text-align: center;
  &:hover {
    color: white;
    background-color: black;
  }
`;
export const SubmitBtnBox = styled.div`
  width: 20%;
  display: flex;
  justify-content: flex-end;
  margin-right: 40px;
`;

export const SubmitBtn = styled(Button)`
  width: 80px;
`;

export const NickNameBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 40%;
`;

export const UserNickName = styled.p`
  margin: 15px 0;
  font-size: 40px;
  font-weight: bold;
`;
export const NewNickInput = styled.input`
  font-size: 18px;
  margin: 15px 0;
  border: none;
  padding: 15px 10px;
  width: 50%;
  box-shadow: 1px 1px 10px rgba(1, 1, 1, 0.3);
  border-radius: 10px;
`;

export const CurrentNickName = styled.p`
  font-size: 20px;
`;
