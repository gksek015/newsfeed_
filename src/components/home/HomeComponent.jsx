import React, { useEffect, useState } from 'react';
import { HomeContainer } from '../../styles/home';
import PostList from './PostList';
import { supabase } from '../../supabase/supabaseClient';

const HomeComponent = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPostsWithUsers = async () => {
      const { data, error } = await supabase.from('posts')
        .select(`id, title, content, song_url, user_id, created_at, users (
        id, nickname, profile_img_url)`);
      if (error) {
        console.error('데이터 가져오기 실패:', error.message);
        return;
      }
      setPosts(data);
    };

    fetchPostsWithUsers();
  }, []);

  return (
    <HomeContainer>
      <PostList posts={posts} setPosts={setPosts} />
    </HomeContainer>
  );
};

export default HomeComponent;
