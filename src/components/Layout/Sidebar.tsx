import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Home,
  Trophy,
  User,
  BookOpen,
  Users,
  HelpCircle,
  Settings,
  LogOut,
  Menu,
  X,
  Zap
} from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

const Sidebar: React.FC = () => {
  const location = useLocation();
  const { logout } = useAuth();
  const [isCollapsed, setIsCollapsed] = useState(false);

  const navItems = [
    { path: '/dashboard', icon: Home, label: 'Dashboard' },
    { path: '/leaderboard', icon: Trophy, label: 'Leaderboard' },
    { path: '/profile', icon: User, label: 'My Profile' },
    { path: '/skills', icon: BookOpen, label: 'Skills' },
    { path: '/community', icon: Users, label: 'Community' },
    { path: '/help', icon: HelpCircle, label: 'Help & Support' },
    { path: '/settings', icon: Settings, label: 'Settings' },
  ];

  const handleLogout = () => {
    logout();
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-gray-900 text-white rounded-lg"
      >
        {isCollapsed ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar */}
      <motion.div
        initial={false}
        animate={{
          width: isCollapsed ? 80 : 280,
          x: 0
        }}
        className={`
          fixed left-2 top-5 right-2 bottom-5 bg-gray-900 text-white z-40 transition-all duration-300 border margin-2 [border-radius:2rem]
          ${isCollapsed ? 'lg:w-20' : 'lg:w-70'}
          ${isCollapsed ? 'w-0 -translate-x-full lg:translate-x-0' : 'w-70'}
        `}
      >
        {/* Logo */}
        <div className="px-12 py-6 border-b border-gray-800">
          <div className="flex items-center justify-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <Zap size={24} className="text-white" />
            </div>
            {!isCollapsed && (
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-xl font-bold"
              >
                Rank
              </motion.span>
            )}
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 py-6">
          <ul className="space-y-2 px-4">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              const Icon = item.icon;

              return (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className={`
                      flex items-center px-12 py-3 rounded-3xl transition-all duration-500 ease-out transform hover:-translate-y-1 hover:scale-[1.02] active:translate-y-0 active:scale-[0.98]
                      ${isActive 
                        ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white transition-all duration-500 ease-out' 
                        : 'text-gray-300 hover:bg-gray-800 hover:text-white transition-all duration-500 ease-out'
                      }
                    `}
                  >
                    <Icon size={20} />
                    {!isCollapsed && (
                      <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="ml-3"
                      >
                        {item.label}
                      </motion.span>
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Logout Button */}
        <div className="px-12 border-t rounded-3xl border-gray-800">
          <button
            onClick={handleLogout}
            className="flex items-center w-full px-4 py-3 text-gray-300 hover:bg-gray-800 hover:text-white rounded-3xl transition-all duration-200"
          >
            <LogOut size={20} />
            {!isCollapsed && (
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="ml-3"
              >
                Logout
              </motion.span>
            )}
          </button>
        </div>

        {/* Mobile App Download Card */}
        {!isCollapsed && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="m-4 p-4 bg-gradient-to-r from-green-500 to-blue-500 rounded-3xl"
          >
            <div className="text-center">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Zap size={24} className="text-white" />
              </div>
              <h4 className="font-semibold mb-2">Download our mobile app</h4>
              <button className="w-full bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-3xl text-sm transition-colors">
                Get Access
              </button>
            </div>
          </motion.div>
        )}
      </motion.div>

      {/* Overlay for mobile */}
      {!isCollapsed && (
        <div
          className="lg:hidden fixed inset-0 bg-black/50 z-30"
          onClick={() => setIsCollapsed(true)}
        />
      )}
    </>
  );
};

export default Sidebar;