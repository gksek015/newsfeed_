import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const PostCardContainer = styled.div`
  padding: 1rem;
  background-color: white;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.4s ease, box-shadow 0.4s ease;
  display: flex;
  flex-direction: column;
  width: 200px;
  overflow: hidden;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
  }
`;

export const StLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

export const PostCardHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 0.7rem;
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
`;

export const ProfileImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
`;

export const Title = styled.div`
  font-size: 1rem;
  font-weight: 600;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 1rem;
  height: 1.2rem;
`;

export const Thumbnail = styled.img`
  width: 100%;
  height: 150px;
  margin-bottom: 1rem;
  object-fit: contain;
`;

export const BottomBox = styled.div`
  height: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const CreatedAt = styled.div`
  color: #878e96;
  font-size: 0.8rem;
`;

export const LikeButtonBox = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  align-items: center;
`;

export const LikeButton = styled.div`
  background: inherit;
  border: none;
  box-shadow: none;
  cursor: pointer;
`;

export const LikeCount = styled.span`
  color: #54575b;
  font-size: 0.7rem;
`;

export const ButtonBox = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  margin-top: 1rem;
`;

export const EditButton = styled(Link)`
  display: flex;
  align-items: center;
  padding: 0.3rem 0.6rem;
  background-color: white;
  color: black;
  border: 1px solid black;
  border-radius: 20px;
  font-size: 0.8rem;
  text-decoration: none;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;

  &:hover {
    color: white;
    background-color: black;
  }
`;

export const DeleteButton = styled.button`
  padding: 0.3rem 0.6rem;
  background-color: white;
  color: black;
  border: 1px solid black;
  border-radius: 20px;
  font-size: 0.8rem;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;

  &:hover {
    color: white;
    background-color: black;
  }
`;
