import {
  ShareAltOutlined,
  ShopOutlined,
  ShoppingCartOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { NavLink } from 'react-router-dom';
import { GrAppsRounded } from 'react-icons/gr';
import { IoStatsChartOutline } from 'react-icons/io5';
import { IoCubeOutline } from 'react-icons/io5';
import { HiOutlinePuzzlePiece } from 'react-icons/hi2';
import { GrServicePlay } from 'react-icons/gr';
import { IoSettingsOutline } from 'react-icons/io5';

const Sidebar = () => {
  return (
    <div className="bg-[#012874] h-screen w-[280px] text-white font-medium flex-col">
      <div className="flex items-center py-6 px-4">
        <div className="w-full flex items-center justify-center">
          <span className="text-2xl font-bold">botCommerce.io</span>
        </div>
      </div>
      <nav className="space-y-4 px-6">
        <NavLink
          to="/dashboard"
          className="flex items-center space-x-3"
          activeClassName="text-teal-400"
        >
          <IoStatsChartOutline size={24} />
          <h3 className="text-lg">Boshqaruv paneli</h3>
        </NavLink>
        <NavLink
          to="/categories"
          className="flex items-center space-x-3"
          activeClassName="text-teal-400"
        >
          <GrAppsRounded size={24} />
          <h3 className="text-lg">Kategoriyalar</h3>
        </NavLink>
        <NavLink
          to="/products"
          className="flex items-center space-x-3"
          activeClassName="text-teal-400"
        >
          <IoCubeOutline size={24} />
          <h3 className="text-lg">Mahsulotlar</h3>
        </NavLink>
        <NavLink
          to="/customers"
          className="flex items-center space-x-3"
          activeClassName="text-teal-400"
        >
          <TeamOutlined style={{ fontSize: '24px' }} />
          <h3 className="text-lg">Mijozlar</h3>
        </NavLink>
        <NavLink
          to="/marketing"
          className="flex items-center space-x-3"
          activeClassName="text-teal-400"
        >
          <ShareAltOutlined style={{ fontSize: '24px' }} />
          <h3 className="text-lg">Marketing</h3>
        </NavLink>
        <NavLink
          to="/platforms"
          className="flex items-center space-x-3"
          activeClassName="text-teal-400"
        >
          <HiOutlinePuzzlePiece size={24} />
          <h3 className="text-lg">Platformalar</h3>
        </NavLink>
        <NavLink
          to="/sales"
          className="flex items-center space-x-3"
          activeClassName="text-teal-400"
        >
          <ShoppingCartOutlined style={{ fontSize: '24px' }} />
          <h3 className="text-lg">Sotuvlar</h3>
        </NavLink>
        <NavLink
          to="/services"
          className="flex items-center space-x-3"
          activeClassName="text-teal-400"
        >
          <GrServicePlay size={24} />
          <h3 className="text-lg">Xizmatlar</h3>
        </NavLink>
        <NavLink
          to="/settings"
          className="flex items-center space-x-3"
          activeClassName="text-teal-400"
        >
          <IoSettingsOutline size={24} />
          <h3 className="text-lg">Sozlamalar</h3>
        </NavLink>
        <NavLink
          to="/profile"
          className="flex items-center space-x-3"
          activeClassName="text-teal-400"
        >
          <UserOutlined style={{ fontSize: '24px' }} />
          <h3 className="text-lg">Profilim</h3>
        </NavLink>
        <NavLink
          to="/pos"
          className="flex items-center space-x-3"
          activeClassName="text-teal-400"
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
