import styled from 'styled-components';

export const DescriptionContent = styled.div`
  h1 {
    color: #333;
    font-weight: lighter;
  }
`;

export const ContentItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    color: red;
    font-weight: bold;
    font-size: 12px;
  }

  > div {
    padding: 10px 40px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    font-weight: bold;
  }
`;
