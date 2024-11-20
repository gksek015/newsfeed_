import React, { useEffect, useState } from 'react';
import {
  Dropdown,
  DropdownButton,
  HeaderContainer,
  HomeButton,
  Logo,
  LogoutBtn,
  NavActionsBox,
  NewPostButton,
  ProfileMenuBox
} from '../../styles/header';

import { logOut } from '../../api/auth';
import { supabase } from '../../supabase/supabaseClient';

const Header = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [user, setUser] = useState(null);
  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  useEffect(() => {
    const getUserData = async () => {
      try {
        const {
          data: { user },
          error
        } = await supabase.auth.getUser();

        if (error) throw error;
        console.log(user);
        setUser(user);
      } catch (error) {
        console.error(error);
      }
    };

    getUserData();
    console.log(user);
  }, []);

  return (
    <HeaderContainer>
      <HomeButton to="/">Home</HomeButton>
      <Logo>Replay</Logo>
      <NavActionsBox>
        <NewPostButton to="/createpost">새 글 작성</NewPostButton>
        <ProfileMenuBox>
          <button onClick={toggleDropdown}>
            <img src={user?.user_metadata.profile_img_url} alt="user-profile" />
            <span>▼</span>
          </button>
          {isDropdownOpen && (
            <Dropdown>
              <DropdownButton to="/mypost">내 리플레이</DropdownButton>
              <DropdownButton to="/mypage">마이페이지</DropdownButton>
              <LogoutBtn type="button" onClick={logOut}>
                로그아웃
              </LogoutBtn>
            </Dropdown>
          )}
        </ProfileMenuBox>
      </NavActionsBox>
    </HeaderContainer>
  );
};

export default Header;
