import { Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Panel from './components/Panel';
import Dashboard from './pages/Dashboard';
import Categories from './pages/Categories';
import Products from './pages/Products';
import Customers from './pages/Customers';
import Marketing from './pages/Marketing';
import Platforms from './pages/Platforms';
import Sales from './pages/Sales';
import Services from './pages/Services';
import Settings from './pages/Settings';
import Profile from './pages/Profile';

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
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;
