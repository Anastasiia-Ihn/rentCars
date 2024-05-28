import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { AppBar } from 'components/AppBar/AppBar';
import { CardCarAbout } from 'components/CardCarAbout/CardCarAbout';
import { Footer } from 'components/Footer/Footer';

export const Layout = () => {
  return (
    <>
      <AppBar />
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
      <Footer/>
      <CardCarAbout />
    </>
  );
};
