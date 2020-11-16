import styled from 'styled-components';
import { Container } from '../layout';

export const LoginContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > * {
    margin-top: 5px;
  }
`;

export const LoginContainer = styled(Container)`
  background: #E61919;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;

  img {
    height: 40px;
  }
`;