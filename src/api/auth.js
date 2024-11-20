import { supabase } from '../supabase/supabaseClient';

export const signIn = async ({ email, password }) => {
  const { user, error } = await supabase.auth.signInWithPassword({ email, password });
  if (error) {
    throw error;
  }
};

export const logOut = async () => {
  const { error } = await supabase.auth.signOut();

  if (error) {
    alert('로그아웃 실패!' + error.message);
    throw error;
  } else {
    alert('로그아웃되었습니다.');
  }
};
