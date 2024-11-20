import React, { useState } from 'react';
import { Btn, Div, Div2, Form, Input } from '../../styles/post';

import { useNavigate } from 'react-router-dom';
import { supabase } from '../../supabase/supabaseClient';

const CreatePost = () => {
  const [song_url, setSong_Url] = useState('');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const navigate = useNavigate();

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };
  const handelReview = (e) => {
    setContent(e.target.value);
  };
  const handelLinkValue = (e) => {
    setSong_Url(e.target.value);
  };
  const handelSubmit = async (e) => {
    e.preventDefault();
    const { data, error } = await supabase.from('posts').insert([{ song_url, title, content }]);
    alert('등록완료');
    navigate('/');
  };

  return (
    <Div>
      <Form onSubmit={handelSubmit}>
        <Div2>
          <label>영상링크</label>
          <Input type="text" value={song_url} onChange={handelLinkValue} />
        </Div2>
        <Div2>
          <label>제목</label>
          <Input type="text" value={title} onChange={handleTitle} />
        </Div2>
        <Div2>
          <label>추천 이유</label>
          <Input type="text" value={content} onChange={handelReview} />
        </Div2>
        <Div2>
          <label>태그</label>
          <Input type="text" />
        </Div2>
        <Btn>등록</Btn>
      </Form>
    </Div>
  );
};

export default CreatePost;
