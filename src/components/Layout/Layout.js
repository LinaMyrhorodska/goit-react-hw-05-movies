import { Outlet } from 'react-router-dom';
import StyledLink from './Layout.styled';
import { LayoutHeader, LayoutNavigation, LayoutSection } from './Layout.styled';
import { Suspense } from 'react';
import { Loader } from 'components/Loader/Loader';

const Layout = () => {
  return (
    <>
      <LayoutHeader>
        <LayoutNavigation>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/movies">Movies</StyledLink>
        </LayoutNavigation>
      </LayoutHeader>
      <main>
        <LayoutSection>
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </LayoutSection>
      </main>
    </>
  );
};
export default Layout;