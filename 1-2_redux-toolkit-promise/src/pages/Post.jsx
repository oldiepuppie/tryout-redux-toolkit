import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectPost, fetchPostById } from "../features/posts/postSlice";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const GrayBackgroundSpan = styled.span`
  background-color: #ebedef;
`;

export const Username = styled.p`
  margin-left: 0;
  font-size: 0.9rem;
  font-weight: normal;
  color: #909497;
`;

const Post = () => {
  const post = useSelector(selectPost);
  const { title, username, content } = post;
  const dispatch = useDispatch();

  const { id } = useParams();
  useEffect(() => {
    dispatch(fetchPostById(id));
  }, [id, dispatch]);

  return (
    <div>
      <h2>post</h2>
      {!title || !username || !content ? (
        <h3>
          <GrayBackgroundSpan>게시물이 없습니다</GrayBackgroundSpan>
        </h3>
      ) : (
        <div>
          <h3>
            <GrayBackgroundSpan>{`${title}`}</GrayBackgroundSpan>
            <Username>{`${username}`}</Username>
          </h3>
          <p>{content}</p>
        </div>
      )}
    </div>
  );
};

export default Post;
