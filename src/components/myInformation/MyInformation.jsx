import React, { useEffect, useRef, useState } from 'react';
import {
  Container,
  ContainerLeft,
  ContainerRight,
  CurrentNickName,
  DeleteImgBtn,
  FileInput,
  Form,
  ImgBtnBox,
  NewNickInput,
  NickNameBox,
  ProfileImg,
  ProfileImgBox,
  SelectImg,
  SubmitBtn,
  SubmitBtnBox,
  UserNickName,
  Wrapper
} from '../../styles/myInformation';
import { supabase } from '../../supabase/supabaseClient';

const DEFAULT_IMAGE_URL = 'https://i.pinimg.com/736x/3b/73/a1/3b73a13983f88f8b84e130bb3fb29e17.jpg';

const MyInformation = () => {
  const [profileImg, setProfileImg] = useState(DEFAULT_IMAGE_URL);
  const [newProfileImg, setNewProfileImg] = useState(null);
  const [nickname, setNickname] = useState('');
  const nickNameRef = useRef();
  const [user, setUser] = useState(null);

  //유저 데이터 불러오기
  useEffect(() => {
    const getUserData = async () => {
      try {
        const {
          data: { user },
          error
        } = await supabase.auth.getUser();

        if (error) {
          throw error;
        }

        setUser(user);

        const { data, error: userError } = await supabase
          .from('users')
          .select('nickname, profile_img_url')
          .eq('id', user.id)
          .single();

        if (userError) {
          throw userError;
        }

        setNickname(data.nickname);
        setProfileImg(data.profile_img_url || DEFAULT_IMAGE_URL);

        if (nickNameRef.current) {
          nickNameRef.current.value = data.nickname;
        }
      } catch (error) {
        console.error(error);
      }
    };

    getUserData();
  }, []);

  // 유저 이미지, 닉네임 변경
  const updateUserInfo = async (id, newProfileImg, newNickname) => {
    try {
      const { error } = await supabase
        .from('users')
        .update({ profile_img_url: newProfileImg, nickname: newNickname })
        .eq('id', id);

      if (error) {
        throw error;
      }

      const { error: authError } = await supabase.auth.updateUser({
        data: {
          nickname: newNickname,
          profile_img_url: newProfileImg
        }
      });
      if (authError) {
        throw authError;
      }
    } catch (error) {
      console.error(error);
    }
  };

  // 이미지 선택
  const onChaneFileInput = async (files) => {
    const [file] = files;

    if (!file) {
      return;
    }

    try {
      const { data, error } = await supabase.storage.from('avatars').upload(`avatar_${Date.now()}.png`, file);

      if (error) {
        throw error;
      }

      const newProfileImgUrl = `https://ufvtkvcvhdpfbwmpvmnu.supabase.co/storage/v1/object/public/avatars/${data.path}`;
      setNewProfileImg(newProfileImgUrl);
    } catch (error) {
      console.error(error);
    }
  };

  // 이미지 삭제
  const onClickDeleteImage = async () => {
    if (profileImg === DEFAULT_IMAGE_URL) {
      alert('기본 이미지는 삭제할 수 없습니다.');
      return;
    }
    try {
      // 스토리지에서 기존 프로필 이미지 삭제
      const fileName = profileImg.split('/').pop();
      await supabase.storage.from('avatars').remove([fileName]);

      // 프로필 이미지를 기본 이미지로 업데이트
      await updateUserInfo(user.id, DEFAULT_IMAGE_URL, nickname);

      setProfileImg(DEFAULT_IMAGE_URL);
      setNewProfileImg(null);

      alert('이미지 삭제 완료!');
    } catch (error) {
      console.error(error);
    }
  };

  // 수정 완료
  const handleSubmit = async (e) => {
    e.preventDefault();

    const newNickname = nickNameRef.current.value || nickname;
    const newImg = newProfileImg || profileImg;

    try {
      await updateUserInfo(user.id, newImg, newNickname);

      setNickname(newNickname);
      setProfileImg(newImg);
      setNewProfileImg(null);
      alert('수정 완료');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Wrapper>
      <Container>
        <ContainerLeft>
          <Form>
            <ProfileImgBox>
              <ProfileImg src={newProfileImg || profileImg} alt="profile"></ProfileImg>
            </ProfileImgBox>

            <ImgBtnBox>
              <DeleteImgBtn onClick={onClickDeleteImage}>이미지 제거</DeleteImgBtn>
              <FileInput
                type="file"
                id="postImage"
                accept="image/*"
                onChange={(e) => onChaneFileInput(e.target.files)}
              />
              <SelectImg htmlFor="postImage">파일 선택</SelectImg>
            </ImgBtnBox>
          </Form>
        </ContainerLeft>

        <ContainerRight>
          <Form onSubmit={handleSubmit}>
            <NickNameBox>
              <CurrentNickName>현재 닉네임</CurrentNickName>
              <UserNickName>{nickname}</UserNickName>
              <NewNickInput type="text" ref={nickNameRef} placeholder="새로운 닉네임을 입력해주세요." />
            </NickNameBox>

            <SubmitBtnBox>
              <SubmitBtn type="submit">완료</SubmitBtn>
            </SubmitBtnBox>
          </Form>
        </ContainerRight>
      </Container>
    </Wrapper>
  );
};

export default MyInformation;
