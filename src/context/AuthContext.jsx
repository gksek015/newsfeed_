import { createContext, useEffect, useState } from 'react';
import { supabase } from '../supabase/supabaseClient';
import { useLocation, useNavigate } from 'react-router-dom';

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [isLogin, setIsLogin] = useState(false);
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // const getPost = async () => {
    //   try {
    //     const { data: post, error } = await supabase.from('posts').select('*').eq('id', id);
    //     if (error) {
    //       console.error(error);
    //       throw error;
    //     }
    //     setPostData(post[0]); // 게시글 데이터를 postData state에 저장
    //     console.log(post[0]);
    //     // 로그인한 사용자 정보 가져오기
    //     const {
    //       data: { user },
    //       error: userError
    //     } = await supabase.auth.getUser();

    //     if (userError) {
    //       console.error(userError);
    //       throw userError;
    //     }

    //     // 사용자 정보를 user state에 저장
    //     setUser(user);

    //     fetchComments(); // 댓글 데이터를 가져온다.
    //   } catch (error) {
    //     console.error(error);
    //   }
    // };

    const {
      data: { subscription }
    } = supabase.auth.onAuthStateChange((event, session) => {
      if (session) {
        // 로그인 상태로 변경

        if (location.pathname === '/login') {
          navigate('/');
        }
      } else {
        // 로그아웃 상태로 변경
        if (location.pathname !== '/signup') {
          navigate('/login');
        }
      }
      setLoading(false);
    });

    return () => subscription.unsubscribe();
  }, [navigate, location.pathname]);

  return <AuthContext.Provider value={{}}>{loading ? null : children}</AuthContext.Provider>;
};

export default AuthProvider;
