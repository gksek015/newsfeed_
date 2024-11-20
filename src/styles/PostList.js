import styled from 'styled-components';

export const PostListContainer = styled.div`
  background-color: #f8f9fa;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(190px, 1fr));
  grid-auto-rows: min-content;
  gap: 4rem;
  padding: 2rem 8rem 2rem 8rem;
  flex-grow: 1;
`;
