import React from 'react';
import { motion } from 'framer-motion';
import { 
  Trophy, 
  BookOpen, 
  Users, 
  TrendingUp, 
  Calendar,
  Plus,
  ArrowRight,
  Star,
  Clock
} from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import Card from '../components/UI/Card';

const Dashboard: React.FC = () => {
  const { user } = useAuth();

  const stats = [
    { label: 'Profile Completion', value: 85, icon: Users, color: 'bg-blue-500' },
    { label: 'National Rank', value: 145, icon: Trophy, color: 'bg-yellow-500' },
    { label: 'College Rank', value: 12, icon: Star, color: 'bg-purple-500' },
    { label: 'Skills Mastered', value: 8, icon: BookOpen, color: 'bg-green-500' },
  ];

  const recentActivity = [
    { title: 'React Development Course', type: 'Course', progress: 45, timeLeft: '8h 45min' },
    { title: 'System Design Interview', type: 'Assessment', progress: 75, timeLeft: '18h 12min' },
    { title: 'Machine Learning Basics', type: 'Course', progress: 100, timeLeft: 'Completed' },
  ];

  const upcomingEvents = [
    { title: 'Tech Talk: AI in Engineering', date: '17', type: 'Webinar' },
    { title: 'Coding Competition', date: '19', type: 'Contest' },
    { title: 'Career Fair 2024', date: '25', type: 'Event' },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Welcome back {user?.name || 'Taylor'} 👋
          </h1>
          <p className="text-gray-600 dark:text-gray-300 mt-1">
            Track your progress and achieve your career goals
          </p>
        </div>
        <div className="flex items-center space-x-3">
          <div className="text-right">
            <p className="text-sm text-gray-500">Search courses</p>
          </div>
          <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
            <img 
              src={user?.profileImage || "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400"} 
              alt="Profile" 
              className="w-10 h-10 rounded-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{stat.label}</p>
                    <p className="text-2xl font-bold text-gray-900 dark:text-white mt-1">
                      {stat.value}{stat.label.includes('Completion') ? '%' : ''}
                    </p>
                  </div>
                  <div className={`w-12 h-12 ${stat.color} rounded-lg flex items-center justify-center`}>
                    <Icon size={24} className="text-white" />
                  </div>
                </div>
                {stat.label.includes('Completion') && (
                  <div className="mt-4">
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div 
                        className="bg-blue-500 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${stat.value}%` }}
                      />
                    </div>
                  </div>
                )}
              </Card>
            </motion.div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Activity */}
        <div className="lg:col-span-2">
          <Card className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                Course You're Taking
              </h2>
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-500">Active</span>
                <button className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                  <Plus size={14} className="text-white" />
                </button>
              </div>
            </div>
            <div className="space-y-4">
              {recentActivity.map((activity, index) => (
                <motion.div
                  key={activity.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg"
                >
                  <div className="flex items-center space-x-4">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                      activity.type === 'Course' ? 'bg-blue-100 dark:bg-blue-900' : 
                      activity.type === 'Assessment' ? 'bg-orange-100 dark:bg-orange-900' : 
                      'bg-green-100 dark:bg-green-900'
                    }`}>
                      <BookOpen size={20} className={
                        activity.type === 'Course' ? 'text-blue-600 dark:text-blue-400' : 
                        activity.type === 'Assessment' ? 'text-orange-600 dark:text-orange-400' : 
                        'text-green-600 dark:text-green-400'
                      } />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900 dark:text-white">{activity.title}</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{activity.type}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="text-right">
                      <p className="text-sm font-medium text-gray-900 dark:text-white">
                        Remaining: {activity.timeLeft}
                      </p>
                      <div className="flex items-center mt-1">
                        <div className="w-16 bg-gray-200 dark:bg-gray-600 rounded-full h-2 mr-2">
                          <div 
                            className="bg-blue-500 h-2 rounded-full"
                            style={{ width: `${activity.progress}%` }}
                          />
                        </div>
                        <span className="text-sm text-gray-500">{activity.progress}%</span>
                      </div>
                    </div>
                    <ArrowRight size={16} className="text-gray-400" />
                  </div>
                </motion.div>
              ))}
            </div>
          </Card>
        </div>

        {/* Upcoming Events */}
        <div className="space-y-6">
          {/* Go Premium Card */}
          <Card className="p-6 bg-gradient-to-r from-purple-500 to-blue-500 text-white">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-lg font-semibold">Go Premium</h3>
                <p className="text-sm opacity-90">Explore 250+ courses with lifetime membership</p>
              </div>
              <div className="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center">
                <Trophy size={24} />
              </div>
            </div>
            <button className="w-full bg-white/20 hover:bg-white/30 text-white py-2 rounded-lg font-medium transition-colors">
              Get Access
            </button>
          </Card>

          {/* Calendar */}
          <Card className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-gray-900 dark:text-white">August, 2024</h3>
              <div className="flex space-x-2">
                <button className="text-gray-400 hover:text-gray-600">&lt;</button>
                <button className="text-gray-400 hover:text-gray-600">&gt;</button>
              </div>
            </div>
            <div className="grid grid-cols-7 gap-1 text-center text-sm">
              {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map(day => (
                <div key={day} className="p-2 text-gray-500 font-medium">{day}</div>
              ))}
              {Array.from({ length: 31 }, (_, i) => (
                <div 
                  key={i + 1} 
                  className={`p-2 rounded ${i + 1 === 17 ? 'bg-green-500 text-white' : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'}`}
                >
                  {i + 1}
                </div>
              ))}
            </div>
          </Card>

          {/* Assignments */}
          <Card className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-gray-900 dark:text-white">Assignments</h3>
              <Plus size={20} className="text-green-500" />
            </div>
            <div className="space-y-3">
              {upcomingEvents.map((event, index) => (
                <div key={event.title} className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                    <span className="text-sm font-medium text-gray-900 dark:text-white">{event.date}</span>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900 dark:text-white">{event.title}</p>
                    <p className="text-xs text-gray-500">{event.type}</p>
                  </div>
                  <div className={`px-2 py-1 rounded text-xs ${
                    index === 0 ? 'bg-orange-100 text-orange-600' : 
                    index === 1 ? 'bg-green-100 text-green-600' : 
                    'bg-blue-100 text-blue-600'
                  }`}>
                    {index === 0 ? 'In progress' : index === 1 ? 'Completed' : 'Upcoming'}
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;