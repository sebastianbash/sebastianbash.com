import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../footer/Footer';
import Header from '../header/Header';

export default function Layout() {
  return (
    <div className="px-4 md:container md:mx-auto lg:px-12">
        <Header />
        <Outlet />
        <Footer />
    </div>
  )
}
