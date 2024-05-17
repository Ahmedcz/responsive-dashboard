import React, { ReactNode } from 'react';
import Navbar from '../organisms/Navbar';
import Sidebar from '../organisms/Sidebar';

interface DashboardLayoutProps {
    children?: React.ReactNode;
}
const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  return (
    <div className="dashboard-layout">
      <Navbar />
      <Sidebar />
      <main>{children}</main>
    </div>
  );
};

export default DashboardLayout;
