import ReactPlayer from 'react-player';
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
  width: 70%;
  height: 80%;
  display: flex;
  flex-direction: row;
  background-color: white;
  box-shadow: 1px 10px 10px rgba(1, 1, 1, 0.3);
`;

export const ContainerLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-right: 1px solid #dcdcdc;
  width: 70%;
  height: 100%;
`;

export const VideoBox = styled.div`
  width: 80%;
  height: 50%;
  border: 1px none black;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Player = styled(ReactPlayer)``;

export const ContentBox = styled.div`
  padding: 15px;
  margin-top: 20px;
  width: 76%;
  height: 30%;
  display: flex;
  flex-direction: column;
  border: 1px solid lightgray;
  border-radius: 10px;
`;

export const MusicInfoBox = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Singer = styled.p`
  font-size: 1.5rem;
  padding-bottom: 20px;
  font-weight: bold;
`;

export const Title = styled.p`
  font-size: 1.5rem;
  padding-bottom: 20px;
`;

export const ContainerRight = styled.div`
  padding-left: 10px;
  width: 50%;
  height: 100%;
`;

export const CommentBox = styled.div`
  height: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const CommentListBox = styled.div`
  width: 100%;
  overflow-y: auto;
  height: 78%;
`;

export const CommentList = styled.div``;

export const CommentItem = styled.div``;

export const CommentInfoBox = styled.div`
  width: 95%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0px 20px 10px;
`;

export const CommentInfo = styled.div`
  width: 100%;
  margin-left: 8px;
  display: flex;
  flex-direction: column;
`;

export const CommentContentBox = styled.div`
  width: 100%;
`;

export const ProfileImg = styled.img`
  width: 50px;
  padding-right: 15px;
`;

export const Writer = styled.span`
  line-height: 2;
  font-size: 1.3rem;
`;

export const Comment = styled.p`
  word-break: break-all;
  font-weight: bold;
  font-size: 1.5rem;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const CommentInputBox = styled.div`
  width: 100%;
  margin-bottom: 10px;
`;

export const CommentInput = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;

  margin-top: 10px;
`;

export const AddCommentTextArea = styled.textarea`
  padding: 10px 10px;
  width: 70%;
  border: 1px solid lightgray;
  border-radius: 10px;
  margin-right: 10px;
  font-size: 1.2rem;
`;

const Button = styled.button`
  border-radius: 20px;
  background-color: white;
  border: 1px solid black;
  color: black;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
  &:hover {
    color: white;
    background-color: black;
    font-weight: bold;
  }
`;

export const SubmitBtn = styled(Button)`
  width: 15%;
  font-size: 1.2rem;
`;
export const CompleteEditBtn = styled(Button)`
  font-size: 12px;
  width: 40px;
  height: 30px;
  margin: 0px 5px;
  margin-right: 5px;
`;
export const EditCancelBtn = styled(Button)`
  font-size: 12px;
  width: 40px;
  height: 30px;
`;
export const EditBtn = styled(Button)`
  font-size: 12px;
  width: 40px;
  height: 30px;
  margin-right: 5px;
`;
export const DeleteBtn = styled(Button)`
  font-size: 12px;
  width: 40px;
  height: 30px;
`;
export const EditBtnBox = styled.div`
  margin-right: 15px;
`;
export const DefaultMessage = styled.p`
  font-size: 20px;
`;
export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const EditTextArea = styled.textarea`
  width: 92%;
  border-radius: 10px;
  padding: 10px;
  font-size: 20px;
  font-weight: bold;
`;

export const EditCommentBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const CompleteBtnBox = styled.div`
  width: 30%;
`;
