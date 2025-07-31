import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Moon, Sun, Bell, Lock, User, Shield, Palette, Globe } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import Card from '../components/UI/Card';

const Settings: React.FC = () => {
  const { isDark, toggleTheme } = useTheme();
  const [notifications, setNotifications] = useState({
    email: true,
    push: false,
    community: true,
    ranking: true
  });
  
  const [privacy, setPrivacy] = useState({
    profilePublic: true,
    showRanking: true,
    allowMessages: true
  });

  const handleNotificationChange = (key: keyof typeof notifications) => {
    setNotifications(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const handlePrivacyChange = (key: keyof typeof privacy) => {
    setPrivacy(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const ToggleSwitch: React.FC<{ checked: boolean; onChange: () => void }> = ({ checked, onChange }) => (
    <button
      onClick={onChange}
      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
        checked ? 'bg-blue-500' : 'bg-gray-300 dark:bg-gray-600'
      }`}
    >
      <span
        className={`inline-block h-4 w-4 rounded-full bg-white transition-transform ${
          checked ? 'translate-x-6' : 'translate-x-1'
        }`}
      />
    </button>
  );

  const settingSections = [
    {
      title: 'Appearance',
      icon: Palette,
      items: [
        {
          label: 'Dark Mode',
          description: 'Toggle between light and dark theme',
          action: (
            <button
              onClick={toggleTheme}
              className="flex items-center space-x-2 px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
            >
              {isDark ? <Sun size={16} /> : <Moon size={16} />}
              <span>{isDark ? 'Switch to Light' : 'Switch to Dark'}</span>
            </button>
          )
        }
      ]
    },
    {
      title: 'Notifications',
      icon: Bell,
      items: [
        {
          label: 'Email Notifications',
          description: 'Receive updates via email',
          action: <ToggleSwitch checked={notifications.email} onChange={() => handleNotificationChange('email')} />
        },
        {
          label: 'Push Notifications',
          description: 'Browser push notifications',
          action: <ToggleSwitch checked={notifications.push} onChange={() => handleNotificationChange('push')} />
        },
        {
          label: 'Community Updates',
          description: 'Notifications from community posts',
          action: <ToggleSwitch checked={notifications.community} onChange={() => handleNotificationChange('community')} />
        },
        {
          label: 'Ranking Changes',
          description: 'Get notified when your rank changes',
          action: <ToggleSwitch checked={notifications.ranking} onChange={() => handleNotificationChange('ranking')} />
        }
      ]
    },
    {
      title: 'Privacy',
      icon: Shield,
      items: [
        {
          label: 'Public Profile',
          description: 'Make your profile visible to others',
          action: <ToggleSwitch checked={privacy.profilePublic} onChange={() => handlePrivacyChange('profilePublic')} />
        },
        {
          label: 'Show Ranking',
          description: 'Display your rank publicly',
          action: <ToggleSwitch checked={privacy.showRanking} onChange={() => handlePrivacyChange('showRanking')} />
        },
        {
          label: 'Allow Messages',
          description: 'Let other users message you',
          action: <ToggleSwitch checked={privacy.allowMessages} onChange={() => handlePrivacyChange('allowMessages')} />
        }
      ]
    },
    {
      title: 'Account',
      icon: User,
      items: [
        {
          label: 'Change Password',
          description: 'Update your account password',
          action: (
            <button className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors">
              Change
            </button>
          )
        },
        {
          label: 'Two-Factor Authentication',
          description: 'Add an extra layer of security',
          action: (
            <button className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg transition-colors">
              Enable
            </button>
          )
        },
        {
          label: 'Connected Accounts',
          description: 'Manage linked accounts',
          action: (
            <button className="px-4 py-2 bg-gray-500 hover:bg-gray-600 text-white rounded-lg transition-colors">
              Manage
            </button>
          )
        }
      ]
    },
    {
      title: 'Data & Privacy',
      icon: Lock,
      items: [
        {
          label: 'Download Data',
          description: 'Export your account data',
          action: (
            <button className="px-4 py-2 bg-purple-500 hover:bg-purple-600 text-white rounded-lg transition-colors">
              Download
            </button>
          )
        },
        {
          label: 'Delete Account',
          description: 'Permanently delete your account',
          action: (
            <button className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg transition-colors">
              Delete
            </button>
          )
        }
      ]
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Settings</h1>
        <p className="text-gray-600 dark:text-gray-300 mt-1">
          Manage your account preferences and privacy settings
        </p>
      </div>

      {/* Settings Sections */}
      <div className="space-y-6">
        {settingSections.map((section, sectionIndex) => {
          const Icon = section.icon;
          return (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: sectionIndex * 0.1 }}
            >
              <Card className="p-6">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                    <Icon size={20} className="text-blue-600 dark:text-blue-400" />
                  </div>
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {section.title}
                  </h2>
                </div>
                
                <div className="space-y-4">
                  {section.items.map((item, itemIndex) => (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: (sectionIndex * 0.1) + (itemIndex * 0.05) }}
                      className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg"
                    >
                      <div className="flex-1">
                        <h3 className="font-medium text-gray-900 dark:text-white mb-1">
                          {item.label}
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          {item.description}
                        </p>
                      </div>
                      <div className="ml-4">
                        {item.action}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </Card>
            </motion.div>
          );
        })}
      </div>

      {/* Language & Region */}
      <Card className="p-6">
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-10 h-10 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center">
            <Globe size={20} className="text-green-600 dark:text-green-400" />
          </div>
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
            Language & Region
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Language
            </label>
            <select className="w-full px-3 py-2 border border-gray-200 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white">
              <option value="en">English</option>
              <option value="es">Spanish</option>
              <option value="fr">French</option>
              <option value="de">German</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Time Zone
            </label>
            <select className="w-full px-3 py-2 border border-gray-200 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white">
              <option value="est">Eastern Time (EST)</option>
              <option value="pst">Pacific Time (PST)</option>
              <option value="cst">Central Time (CST)</option>
              <option value="utc">UTC</option>
            </select>
          </div>
        </div>
      </Card>

      {/* Save Button */}
      <div className="flex justify-end">
        <button className="px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors">
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default Settings;