import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const StyledLink = styled(NavLink)`
  color: black;
  font-size: 20px;
  text-decoration: none;
  padding: 5px;
  border: 1px solid black;
  &.active {
    border: 1px solid #FFA351;
  }
`;
export default StyledLink;

export const LayoutHeader = styled.header`
background-color: #8AAAE5;
  padding: 30px;
`;

export const LayoutNavigation = styled.nav`
  display: flex;
  gap: 20px;
`;

export const LayoutSection = styled.section`
  font-size: 20px;
  padding: 20px 30px;
`;