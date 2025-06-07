import Navigation from '@shared-components/Navigation';
import Button from '@shared-components/Button';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <main className="flex-1  p-12 bg-gray-100">
        <Outlet />
      </main>
      <footer className="p-4 bg-gray-600 text-center text-sm text-white min-h-40">
        &copy; {new Date().getFullYear()} Vezba
        <div className="mt-2 space-x-2">
          <Button href="/" text="Home" />
          <Button href="/about" text="About Us" />
        </div>
      </footer>
    </div>
  );
};

export default Layout;
