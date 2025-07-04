// src/components/Media.jsx
import styled from "styled-components";

const MediaContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const MediaImage = styled.img`
  max-width: 100%;
  border-radius: 1rem;
`;

const MediaTitle = styled.h2`
  font-size: 1.5rem;
  margin: 0;
`;

function Media({ title, image }) {
  return (
    <MediaContainer>
      <MediaTitle>{title}</MediaTitle>
      <MediaImage src={image} alt={title} />
    </MediaContainer>
  );
}

export default Media;
