import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
color: black;
text-decoration: none;
`;
export const MovieList = styled.ul`
    margin: 0;
    margin-top: 24px;
    margin-left: 20px;
    padding: 0;
    list-style: square;
`;

export const MovieName = styled.li`
    margin-top: 12px;
`;