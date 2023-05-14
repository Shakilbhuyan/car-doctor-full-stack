import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/shared/footer/Footer';
import NavBar from '../pages/shared/NavBer/NavBar';

const MainLayout = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;