import { Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Panel from './components/Panel';
import Dashboard from './pages/dashboard/Dashboard';
import Categories from './pages/categories/Categories';
import Products from './pages/products/Products';
import Customers from './pages/customers/Customers';
import Marketing from './pages/marketing/Marketing';
import Platforms from './pages/platforms/Platforms';
import Sales from './pages/sales/Sales';
import Services from './pages/services/Services';
import Settings from './pages/settings/Settings';
import Profile from './pages/profile/Profile';
import Post from './pages/post/Post';

const App = () => {
  return (
    <div className="flex h-screen ">
      <Sidebar />

      <div className="flex-1 flex-col flex-grow">
        <Panel />

        <div className="flex-1 p-6 mt-[20px] overflow-y-auto">
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/products" element={<Products />} />
            <Route path="/customers" element={<Customers />} />
            <Route path="/marketing" element={<Marketing />} />
            <Route path="/platforms" element={<Platforms />} />
            <Route path="/sales" element={<Sales />} />
            <Route path="/services" element={<Services />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/post" element={<Post />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;
