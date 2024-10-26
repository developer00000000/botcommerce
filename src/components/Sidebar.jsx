import {
  ShareAltOutlined,
  ShopOutlined,
  ShoppingCartOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { GrAppsRounded } from 'react-icons/gr';
import {
  IoStatsChartOutline,
  IoCubeOutline,
  IoSettingsOutline,
} from 'react-icons/io5';
import { HiOutlinePuzzlePiece } from 'react-icons/hi2';
import { GrServicePlay } from 'react-icons/gr';

const Sidebar = () => {
  return (
    <div className="bg-[#012874] h-screen w-[280px] text-white font-medium">
      <div className="flex items-center py-6 px-4">
        <div className="w-full flex items-center justify-center">
          <span className="text-2xl font-bold">botCommerce.io</span>
        </div>
      </div>
      <nav className="space-y-4 px-6">
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            isActive
              ? 'flex items-center space-x-3 text-teal-400'
              : 'flex items-center space-x-3'
          }
        >
          <IoStatsChartOutline size={24} />
          <h3 className="text-lg">Boshqaruv paneli</h3>
        </NavLink>
        <NavLink
          to="/categories"
          className={({ isActive }) =>
            isActive
              ? 'flex items-center space-x-3 text-teal-400'
              : 'flex items-center space-x-3'
          }
        >
          <GrAppsRounded size={24} />
          <h3 className="text-lg">Kategoriyalar</h3>
        </NavLink>
        <NavLink
          to="/products"
          className={({ isActive }) =>
            isActive
              ? 'flex items-center space-x-3 text-teal-400'
              : 'flex items-center space-x-3'
          }
        >
          <IoCubeOutline size={24} />
          <h3 className="text-lg">Mahsulotlar</h3>
        </NavLink>
        <NavLink
          to="/customers"
          className={({ isActive }) =>
            isActive
              ? 'flex items-center space-x-3 text-teal-400'
              : 'flex items-center space-x-3'
          }
        >
          <TeamOutlined style={{ fontSize: '24px' }} />
          <h3 className="text-lg">Mijozlar</h3>
        </NavLink>
        <NavLink
          to="/marketing"
          className={({ isActive }) =>
            isActive
              ? 'flex items-center space-x-3 text-teal-400'
              : 'flex items-center space-x-3'
          }
        >
          <ShareAltOutlined style={{ fontSize: '24px' }} />
          <h3 className="text-lg">Marketing</h3>
        </NavLink>
        <NavLink
          to="/platforms"
          className={({ isActive }) =>
            isActive
              ? 'flex items-center space-x-3 text-teal-400'
              : 'flex items-center space-x-3'
          }
        >
          <HiOutlinePuzzlePiece size={24} />
          <h3 className="text-lg">Platformalar</h3>
        </NavLink>
        <NavLink
          to="/sales"
          className={({ isActive }) =>
            isActive
              ? 'flex items-center space-x-3 text-teal-400'
              : 'flex items-center space-x-3'
          }
        >
          <ShoppingCartOutlined style={{ fontSize: '24px' }} />
          <h3 className="text-lg">Sotuvlar</h3>
        </NavLink>
        <NavLink
          to="/services"
          className={({ isActive }) =>
            isActive
              ? 'flex items-center space-x-3 text-teal-400'
              : 'flex items-center space-x-3'
          }
        >
          <GrServicePlay size={24} />
          <h3 className="text-lg">Xizmatlar</h3>
        </NavLink>
        <NavLink
          to="/settings"
          className={({ isActive }) =>
            isActive
              ? 'flex items-center space-x-3 text-teal-400'
              : 'flex items-center space-x-3'
          }
        >
          <IoSettingsOutline size={24} />
          <h3 className="text-lg">Sozlamalar</h3>
        </NavLink>
        <NavLink
          to="/profile"
          className={({ isActive }) =>
            isActive
              ? 'flex items-center space-x-3 text-teal-400'
              : 'flex items-center space-x-3'
          }
        >
          <UserOutlined style={{ fontSize: '24px' }} />
          <h3 className="text-lg">Profilim</h3>
        </NavLink>
        <NavLink
          to="/pos"
          className={({ isActive }) =>
            isActive
              ? 'flex items-center space-x-3 text-teal-400'
              : 'flex items-center space-x-3'
          }
        >
          <ShopOutlined style={{ fontSize: '24px' }} />
          <h3 className="text-lg">Savdo nuqtasi</h3>
          <span className="ml-2 px-2 py-1 text-xs bg-teal-400 text-black rounded-full">
            beta
          </span>
        </NavLink>
      </nav>
    </div>
  );
};

export default Sidebar;
