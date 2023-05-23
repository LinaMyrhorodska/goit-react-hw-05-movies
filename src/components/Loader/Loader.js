import { Triangle } from 'react-loader-spinner';
import { LoaderContainer } from './Loader.styled';

export const Loader = () => {
    return (<LoaderContainer>
      <Triangle
    height="80"
  width="80"
  color="#8AAAE5"
  ariaLabel="triangle-loading"
  wrapperStyle={{ bottom: 0,
    height: 60,
    left: 0,
    margin: 'auto',
    position: 'absolute',
    right: 0,
    top: 0,
    width: 100,}}
  visible={true}
/>
        </LoaderContainer>
    )
};