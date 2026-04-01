import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import MobileDrawer from '../components/MobileDrawer';
import { useState } from 'react';

const MainLayout: React.FC = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);

    return (
        <div className="min-h-screen bg-white flex flex-col overflow-x-hidden font-montserrat">
            {/* Mobile Navigation Drawer */}
            <MobileDrawer
                isOpen={isDrawerOpen}
                onClose={() => setIsDrawerOpen(false)}
            />

            <Header onToggleDrawer={() => setIsDrawerOpen(true)} />

            <main className={`flex-grow ${location.pathname === '/' ? '' : 'pt-20 md:pt-24'}`}>
                <Outlet />
            </main>

            <Footer />
        </div>
    );
};

export default MainLayout;
