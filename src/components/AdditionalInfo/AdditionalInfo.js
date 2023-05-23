import { AdditionalInfoContainer, AdditionalInfoList, AdditionalInfoHeader } from './AdditionalInfo.styled';
import StyledLink from '../Layout/Layout.styled';
export const AdditionalInfo = () => {
  return (
    <AdditionalInfoContainer>
      <AdditionalInfoHeader>Additional information</AdditionalInfoHeader>
      <AdditionalInfoList>
        <li>
          <StyledLink to="cast">Cast</StyledLink>
        </li>
        <li>
          <StyledLink to="reviews">Reviews</StyledLink>
        </li>
      </AdditionalInfoList>
    </AdditionalInfoContainer>
  );
};