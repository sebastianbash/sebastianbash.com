import React from 'react';
import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <>
        <h2>Header</h2>
        <Outlet />
        <h2>Footer</h2>
    </>
  )
}
