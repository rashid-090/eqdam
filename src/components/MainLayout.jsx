import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

export default function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col antialiased selection:bg-primary selection:text-white">
      {/* Common Header */}
      <Header />

      {/* Main Content Area */}
      <main className="flex-grow pt-20 md:pt-24">
        <Outlet />
      </main>

      {/* Common Footer */}
      <Footer />
    </div>
  );
}
