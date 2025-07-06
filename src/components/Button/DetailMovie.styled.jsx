import styled from "styled-components";

const StyledDetailMovie = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.8rem;
  padding: 2.5rem 1.5rem;
  text-align: center;
  background: linear-gradient(135deg, #e0f2fe, #f8fafc);
  border-radius: 20px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease-in-out;

  img {
    border-radius: 20px;
    max-width: 100%;
    height: auto;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }

  img:hover {
    transform: scale(1.03);
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.2);
  }

  h2 {
    font-size: 2.5rem;
    font-weight: 800;
    color: #1d4ed8;
    margin-bottom: 0.5rem;
    letter-spacing: 0.5px;
  }

  h3 {
    font-size: 1.4rem;
    font-weight: 600;
    color: #1e3a8a;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.1rem;
    line-height: 1.8;
    text-align: justify;
    color: #1f2937;
    background-color: #ffffffd8;
    padding: 1rem;
    border-left: 4px solidrgb(39, 121, 221);
    border-radius: 12px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.03);
    transition: all 0.2s ease;
  }

  p:hover {
    background-color: #e0f2fe;
    transform: translateY(-2px);
  }

  @media screen and (min-width: 768px) {
    flex-direction: row;
    text-align: left;
    align-items: flex-start;

    .poster {
      flex: 1;
    }

    .info {
      flex: 2;
      padding-left: 2rem;
    }
  }

  @media screen and (min-width: 1024px) {
    padding: 4rem 3rem;
    gap: 2.5rem;
  }
`;

export default StyledDetailMovie;
