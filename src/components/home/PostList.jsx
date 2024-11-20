import React, { useState } from 'react';
import { PostListContainer } from '../../styles/postList';
import PostCard from './PostCard';
import { supabase } from '../../supabase/supabaseClient';

const PostList = ({ posts, type, handleDeleteCard, setPosts }) => {
  //
  const [searchSong, setSearchSong] = useState('');
  const searchHandel = async (e) => {
    e.preventDefault();
    setSearchSong(e.target.value);
    const { data } = await supabase
      .from('posts')
      .select(
        `id, title, content, song_url, user_id,created_at, users (
      id, nickname, profile_img_url)`
      )
      .ilike('title', `%${e.target.value}%`);
    setPosts(data);
  };
  //
  return (
    <>
      {/* {} */}
      <input value={searchSong} placeholder="노래를 검색하세요" onChange={searchHandel} />
      {/* {} */}
      <PostListContainer>
        {posts.map((post) => {
          return <PostCard key={post.id} post={post} type={type} handleDeleteCard={handleDeleteCard} />;
        })}
      </PostListContainer>
    </>
  );
};

export default PostList;
