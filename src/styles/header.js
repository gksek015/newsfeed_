import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderContainer = styled.header`
  background-color: #f8f9fa;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 3.5rem 1rem 6rem;
`;

export const HomeButton = styled(Link)`
  font-size: 1.5rem;
  text-decoration: none;
  color: black;
  font-family: 'D2Coding';
  margin-left: 2rem;
`;

export const Logo = styled.div`
  font-size: 1.5rem;
  color: black;
  font-family: 'D2Coding';
  margin-left: 4rem;
`;

export const NavActionsBox = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-right: 2rem;
`;

export const NewPostButton = styled(Link)`
  padding: 0.5rem 1rem;
  background-color: #f8f9fa;
  color: black;
  font-weight: 600;
  border: 1px solid black;
  border-radius: 20px;
  text-decoration: none;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;

  &:hover {
    color: white;
    background-color: black;
    font-weight: bold;
  }
`;

export const ProfileMenuBox = styled.div`
  position: relative;
  button {
    display: flex;
    align-items: center;
    background: none;
    border: none;
    cursor: pointer;
    gap: 0.5rem;
    img {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }
    span {
      margin-left: 8px;
      font-size: 0.8rem;
      color: #8c8f91;
      transition: color 0.2s ease-in-out;

      &:hover {
        color: black;
      }
    }
  }
`;

export const Dropdown = styled.ul`
  position: absolute;
  top: 140%;
  right: 10%;
  width: 12rem;
  background-color: white;
  list-style: none;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  z-index: 1000;
`;

export const DropdownButton = styled(Link)`
  font-size: 1rem;
  text-decoration: none;
  color: black;
  padding: 1rem;
  &:hover {
    background-color: #f8f9fa;
  }
`;

export const LogoutBtn = styled.button`
  cursor: pointer;
  padding: 1rem;
  font-size: 1rem;
  &:hover {
    background-color: #f8f9fa;
  }
`;
