import React from 'react';
import { motion } from 'framer-motion';
import { HelpCircle } from 'lucide-react';

const Help: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <div className="flex items-center mb-6">
          <HelpCircle className="text-blue-500 w-8 h-8 mr-3" />
          <h1 className="text-3xl font-bold">
            Help & Support
          </h1>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-medium text-gray-800">
                How do I update my profile?
              </h3>
              <p className="text-gray-600 mt-1">
                Navigate to the Profile page from the sidebar and click on the 'Edit Profile' button to update your information.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-medium text-gray-800">
                How are leaderboard rankings calculated?
              </h3>
              <p className="text-gray-600 mt-1">
                Leaderboard rankings are based on your total points, which are earned through completing challenges and activities on the platform.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-medium text-gray-800">
                How can I track my progress?
              </h3>
              <p className="text-gray-600 mt-1">
                Visit the Dashboard to see your progress, completed challenges, and upcoming goals.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">
            Need more help?
          </h2>
          <p className="text-gray-700 mb-4">
            If you can't find what you're looking for, please contact our support team at:
          </p>
          <a 
            href="mailto:support@rankp1.com" 
            className="text-blue-500 hover:underline"
          >
            support@rankp1.com
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default Help;