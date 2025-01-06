import { Outlet } from 'react-router-dom';
import NavbarDesk from '../components/navigation/NavbarDesk';

function RootLayout() {
  return (
    <div className='relative h-screen w-screen'>
      {/* Example Header */}
      <header className='fixed w-full z-50 pt-6 flex justify-center'>
        <NavbarDesk />
      </header>

      {/* Main Content */}
      <main className="relative top-0 h-full w-full">
        <Outlet />
      </main>

      {/* Example Footer */}
      <footer>
        <p>&copy; 2024 Exterminator Services</p>
      </footer>
    </div>
  );
}

export default RootLayout;