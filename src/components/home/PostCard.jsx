import React, { useEffect, useState } from 'react';
import {
  BottomBox,
  ButtonBox,
  CreatedAt,
  DeleteButton,
  EditButton,
  LikeButton,
  LikeButtonBox,
  LikeCount,
  PostCardContainer,
  PostCardHeader,
  ProfileImage,
  StLink,
  Thumbnail,
  Title
} from '../../styles/postCard';
import { getYoutubeThumbnailUrl } from '../../utils/youtubeThumbnail';
import { formatDate } from '../../utils/formattedDate';
import { addLike, checkLike, getLikesCount, removeLike } from '../../api/likes';
import { supabase } from '../../supabase/supabaseClient';

const PostCard = ({ post, type, handleDeleteCard }) => {
  const thumbnailUrl = getYoutubeThumbnailUrl(post.song_url);
  const formattedDate = formatDate(post.created_at);

  const [liked, setLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(0);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUserData = async () => {
      try {
        const {
          data: { user },
          error
        } = await supabase.auth.getUser();
        if (error) throw error;
        if (!user) return;

        setUser(user);
      } catch (error) {
        console.error(error);
      }
    };

    const fetchLikeStatus = async () => {
      const isLiked = await checkLike(user.id, post.id);
      setLiked(isLiked);

      const count = await getLikesCount(post.id);
      setLikesCount(count);
    };
    fetchLikeStatus();
    getUserData();
  }, [user?.id, post.id]);

  const handleLikeToggle = async () => {
    try {
      if (liked) {
        await removeLike(user.id, post.id);
        setLiked(false);
        setLikesCount((prev) => prev - 1);
      } else {
        await addLike(user.id, post.id);
        setLiked(true);
        setLikesCount((prev) => prev + 1);
      }
    } catch (error) {
      console.error('좋아요 처리 중 오류:', error);
    }
  };

  return (
    <PostCardContainer>
      <StLink to={`/detail/${post.id}`}>
        <PostCardHeader>
          <ProfileImage src={post.users.profile_img_url} alt={post.users.nickname} />
          <span>{post.users.nickname}</span>
        </PostCardHeader>
        <Title>
          <p>{post.title}</p>
        </Title>
        <Thumbnail src={thumbnailUrl} alt={post.title} />
      </StLink>
      <BottomBox>
        <CreatedAt>{formattedDate}</CreatedAt>
        <LikeButtonBox>
          <LikeButton onClick={handleLikeToggle}>{liked ? '♥' : '♡'}</LikeButton>
          <LikeCount>{likesCount}</LikeCount>
        </LikeButtonBox>
      </BottomBox>
      {type === 'mypost' && (
        <ButtonBox>
          <EditButton to={`/Correction/${post.id}`}>수정</EditButton>
          <DeleteButton
            onClick={() => {
              handleDeleteCard(post.id);
            }}
          >
            삭제
          </DeleteButton>
        </ButtonBox>
      )}
    </PostCardContainer>
  );
};

export default PostCard;
