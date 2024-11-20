import { supabase } from '../supabase/supabaseClient';

// 좋아요 추가
export const addLike = async (userId, postId) => {
  const { data, error } = await supabase.from('likes').insert([{ user_id: userId, post_id: postId }]);

  if (error) throw error;
  return data;
};

// 좋아요 제거
export const removeLike = async (userId, postId) => {
  const { data, error } = await supabase.from('likes').delete().match({ user_id: userId, post_id: postId });

  if (error) throw error;
  return data;
};

// 좋아요 여부 확인
export const checkLike = async (userId, postId) => {
  const { data, error } = await supabase.from('likes').select('*').eq('user_id', userId).eq('post_id', postId);

  if (error) throw error;
  return data.length > 0;
};

// 특정 게시물 총 좋아요 수 가져오기
export const getLikesCount = async (postId) => {
  const { data, error } = await supabase.from('likes').select('*', { count: 'exact' }).eq('post_id', postId);

  if (error) throw error;
  return data.length; // 좋아요 개수 반환
};
