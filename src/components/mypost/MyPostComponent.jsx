import React, { useEffect, useState } from 'react';
import { HomeContainer } from '../../styles/home';
import PostList from '../home/PostList';
import { supabase } from '../../supabase/supabaseClient';
const MyPostComponent = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchUsersPosts = async () => {
      const {
        data: { user },
        error: userError
      } = await supabase.auth.getUser();

      if (userError) {
        console.error('유저 정보 가져오기 실패:', error.message);
      }

      const userId = user.id;

      const { data, error } = await supabase
        .from('posts')
        .select(
          `id, title, content, song_url, user_id, created_at, users (
        id, nickname, profile_img_url)`
        )
        .eq('user_id', userId);
      if (error) {
        console.error('데이터 가져오기 실패:', error.message);
        return;
      }
      setPosts(data);
    };

    fetchUsersPosts();
  }, []);

  const handleDeleteCard = async (id) => {
    console.log(id);
    const { error } = await supabase.from('posts').delete().eq('id', id);
    if (error) {
      console.error('삭제 실패', error.message);
    }
    setPosts(posts.filter((post) => post.id !== id));
  };

  return (
    <HomeContainer>
      <PostList posts={posts} type={'mypost'} handleDeleteCard={handleDeleteCard} />
    </HomeContainer>
  );
};

export default MyPostComponent;
