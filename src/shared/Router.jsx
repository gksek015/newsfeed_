import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from '../pages/Login';
import SignUp from '../pages/SignUp';
import Home from '../pages/Home';
import Detail from '../pages/Detail';
import MyPost from '../pages/MyPost';
import CreatePostPage from '../pages/CreatePostPage';
import CorrectionPage from '../pages/CorrectionPage';

import MyPage from '../pages/MyPage';
import AuthProvider from '../context/AuthContext';

const Router = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/mypost" element={<MyPost />}></Route>
          <Route path="/createpost" element={<CreatePostPage />}></Route>
          <Route path="/correction/:id" element={<CorrectionPage />}></Route>
          <Route path="/detail/:id" element={<Detail />}></Route>
          <Route path="/mypage" element={<MyPage />}></Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default Router;
