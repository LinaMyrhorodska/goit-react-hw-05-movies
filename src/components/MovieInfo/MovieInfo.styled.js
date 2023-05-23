import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MovieInfoWrap = styled.div`
display: grid`;

export const MovieInfoContainer = styled.div`
  display: flex;
  gap: 20px;
  font-size: 18px;
`;

export const GoBackBtn = styled(Link)`
  margin-bottom: 16px;
  color: black;
  text-decoration-color: #FFA351;
  font-size: 18px;
  padding: 10px;
  color: black;
`;

export const MovieInfoTitle = styled.h1`
  margin: 0 0 16px 0;
`;

export const MovieInfoOverview = styled.p`
  text-align: justify;
`;