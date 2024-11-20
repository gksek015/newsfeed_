import React, { useEffect, useState } from 'react';
import {
  AddCommentTextArea,
  Comment,
  CommentBox,
  CommentContentBox,
  CommentInfo,
  CommentInfoBox,
  CommentInput,
  CommentInputBox,
  CommentItem,
  CommentListBox,
  CompleteBtnBox,
  CompleteEditBtn,
  Container,
  ContainerLeft,
  ContainerRight,
  Content,
  ContentBox,
  DefaultMessage,
  DeleteBtn,
  EditBtn,
  EditBtnBox,
  EditCancelBtn,
  EditCommentBox,
  EditTextArea,
  Form,
  Player,
  ProfileImg,
  SubmitBtn,
  VideoBox,
  Wrapper,
  Writer
} from '../../styles/detail';
import { supabase } from '../../supabase/supabaseClient';
import { useParams } from 'react-router-dom';

const PostDetail = () => {
  const { id } = useParams(); // URL에서 게시글 ID를 가져온다.
  const [comments, setComments] = useState([]); // 댓글 목록 state를 관리한다.
  const [newComment, setNewComment] = useState(''); // 새로 추가할 댓글 state를 관리한다.
  const [editCommentId, setEditCommentId] = useState(null); // 수정할 댓글 ID state를 관리한다.
  const [editComment, setEditComment] = useState(''); // 수정할 댓글 state를 관리한다.
  const [user, setUser] = useState(null); // 현재 로그인한 유저의 정보 state를 관리한다.
  const [postData, setPostData] = useState(null); // 게시글 데이터 state를 관리한다.

  useEffect(() => {
    // 게시글 가져오기
    const getPost = async () => {
      try {
        const { data: post, error } = await supabase.from('posts').select('*').eq('id', id);
        if (error) {
          throw error;
        }
        setPostData(post[0]); // 게시글 데이터를 postData state에 저장
        console.log(post[0]);
        // 로그인한 사용자 정보 가져오기
        const {
          data: { user },
          error: userError
        } = await supabase.auth.getUser();

        if (userError) {
          throw userError;
        }

        // 사용자 정보를 user state에 저장
        setUser(user);

        fetchComments(); // 댓글 데이터를 가져온다.
      } catch (error) {
        console.error(error);
      }
    };

    getPost(); // 컴포넌트가 렌더링되면 게시글의 정보를 가져온다.
  }, [id]);

  // 댓글 가져오기
  const fetchComments = async () => {
    try {
      const { data, error } = await supabase
        .from('comments')
        .select('*, users(nickname, profile_img_url)')
        .eq('post_id', id); // params로 가져온 게시글 id의 정보로 댓글을 가져온다.

      if (error) {
        throw error;
      }

      setComments(data); // 가지고 온 댓글 정보들을 Comments state에 저장한다
    } catch (error) {
      console.error(error);
    }
  };

  // 댓글 추가
  const addComment = async () => {
    try {
      const { error } = await supabase
        .from('comments')
        .insert([{ post_id: id, user_id: user.id, comment: newComment }]); // 댓글을 supabase table에 저장한다.

      if (error) {
        throw error;
      }

      setNewComment(''); // 댓글 추가 후, 입력 창 초기화
      fetchComments(); // 추가 후, 댓글 목록 새로고침
    } catch (error) {
      console.error(error);
    }
  };

  // 댓글 수정
  const updateComment = async () => {
    try {
      // 수정할 댓글의 id가 저장된 editCommentId로 comments 테이블의 id와 일치하는 댓글을 찾는다.
      // 댓글 수정 후, supabase comments 테이블에 업데이트
      const { error } = await supabase.from('comments').update({ comment: editComment }).eq('id', editCommentId);

      if (error) {
        throw error;
      }

      setEditCommentId(null); // 댓글 수정 상태 초기화
      setEditComment(''); // 수정 입력창 초기화
      fetchComments(); // 댓글 목록 새로고침
    } catch (error) {
      console.error(error);
    }
  };

  // 댓글 삭제
  const deleteComment = async (commentId) => {
    try {
      // 삭제할 댓글의 id인 commentId와 일치하는 comments 테이블의 댓글을 찾아서 지운다.
      const { error } = await supabase.from('comments').delete().eq('id', commentId);
      if (error) {
        throw error;
      }

      fetchComments(); // 댓글 목록 새로고침
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Wrapper>
      <Container>
        <ContainerLeft>
          <VideoBox>
            {/* ReactPlayer로 영상 정보를 불러온다. */}
            <Player url={postData?.song_url} width={'100%'} height={'100%'} controls={true} />
          </VideoBox>
          <ContentBox>
            {postData?.title}-{postData?.content}
          </ContentBox>
        </ContainerLeft>

        <ContainerRight>
          <CommentBox>
            {/* 댓글 리스트 */}
            <CommentListBox>
              {comments.length > 0 ? (
                comments.map((comment) => (
                  <CommentItem key={comment.id}>
                    {editCommentId === comment.id ? ( // 수정 버튼을 눌렀을 때,
                      // 수정 입력창
                      <CommentInfoBox>
                        <ProfileImg src={comment.users.profile_img_url} />
                        <CommentInfo>
                          <Writer>{comment.users.nickname}</Writer>
                          <EditCommentBox>
                            <EditTextArea
                              value={editComment}
                              onChange={(e) => setEditComment(e.target.value)}
                              rows={1}
                            />
                            <CompleteBtnBox>
                              <CompleteEditBtn onClick={updateComment}>완료</CompleteEditBtn>
                              <EditCancelBtn onClick={() => setEditCommentId(null)}>취소</EditCancelBtn>
                            </CompleteBtnBox>
                          </EditCommentBox>
                        </CommentInfo>
                      </CommentInfoBox>
                    ) : (
                      <CommentInfoBox>
                        <ProfileImg src={comment.users.profile_img_url} />
                        <CommentInfo>
                          <CommentContentBox>
                            <Writer>{comment.users.nickname}</Writer>
                            <Content>
                              <Comment>{comment.comment}</Comment>
                              <EditBtnBox>
                                <EditBtn
                                  onClick={() => {
                                    setEditCommentId(comment.id); // 수정할 댓글 id state 변경
                                    setEditComment(comment.comment); // 현재 댓글을 수정할 댓글 state에 저장
                                  }}
                                >
                                  수정
                                </EditBtn>
                                <DeleteBtn onClick={() => deleteComment(comment.id)}>삭제</DeleteBtn>
                              </EditBtnBox>
                            </Content>
                          </CommentContentBox>
                        </CommentInfo>
                      </CommentInfoBox>
                    )}
                  </CommentItem>
                ))
              ) : (
                <DefaultMessage>댓글이 없습니다.</DefaultMessage>
              )}
            </CommentListBox>

            {/* 댓글 입력 창 */}
            <CommentInputBox>
              <Form
                onSubmit={(e) => {
                  e.preventDefault();
                  addComment();
                }}
              >
                <CommentInput>
                  <AddCommentTextArea
                    placeholder="댓글을 입력해주세요."
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    rows={2}
                  />
                  <SubmitBtn type="submit">등록</SubmitBtn>
                </CommentInput>
              </Form>
            </CommentInputBox>
          </CommentBox>
        </ContainerRight>
      </Container>
    </Wrapper>
  );
};

export default PostDetail;
