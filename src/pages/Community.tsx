import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Heart, MessageCircle, Share, MoreVertical } from 'lucide-react';
import Card from '../components/UI/Card';

const Community: React.FC = () => {
  const [newMessage, setNewMessage] = useState('');
  const [messages, setMessages] = useState([
    {
      id: 1,
      user: 'Alex Chen',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
      message: 'Just completed my React certification! Any tips for the next step in full-stack development?',
      timestamp: '2 hours ago',
      likes: 12,
      replies: 5,
      liked: false
    },
    {
      id: 2,
      user: 'Sarah Johnson',
      avatar: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=400',
      message: 'Working on a machine learning project for my final year. Looking for teammates who are interested in computer vision!',
      timestamp: '4 hours ago',
      likes: 8,
      replies: 3,
      liked: true
    },
    {
      id: 3,
      user: 'Michael Brown',
      avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400',
      message: 'Has anyone tried the new AWS certification path? Thinking about diving into cloud computing.',
      timestamp: '6 hours ago',
      likes: 15,
      replies: 8,
      liked: false
    },
    {
      id: 4,
      user: 'Emily Davis',
      avatar: 'https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=400',
      message: 'Sharing my experience from the Google Summer of Code program. Happy to answer any questions!',
      timestamp: '1 day ago',
      likes: 24,
      replies: 12,
      liked: true
    },
    {
      id: 5,
      user: 'James Wilson',
      avatar: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=400',
      message: 'Currently interviewing at tech companies. The system design rounds are challenging but exciting!',
      timestamp: '1 day ago',
      likes: 18,
      replies: 6,
      liked: false
    }
  ]);

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      const message = {
        id: Date.now(),
        user: 'Taylor Smith',
        avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
        message: newMessage,
        timestamp: 'Just now',
        likes: 0,
        replies: 0,
        liked: false
      };
      setMessages([message, ...messages]);
      setNewMessage('');
    }
  };

  const handleLike = (id: number) => {
    setMessages(messages.map(msg => 
      msg.id === id 
        ? { ...msg, liked: !msg.liked, likes: msg.liked ? msg.likes - 1 : msg.likes + 1 }
        : msg
    ));
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Community</h1>
        <p className="text-gray-600 dark:text-gray-300 mt-1">
          Connect, share, and learn with fellow engineers
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Main Feed */}
        <div className="lg:col-span-3 space-y-6">
          {/* Post Composer */}
          <Card className="p-6">
            <div className="flex space-x-4">
              <img
                src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Your avatar"
                className="w-10 h-10 rounded-full object-cover"
              />
              <div className="flex-1">
                <textarea
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  placeholder="Share your thoughts, ask questions, or help others..."
                  className="w-full p-3 border border-gray-200 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white resize-none"
                  rows={3}
                />
                <div className="flex justify-between items-center mt-3">
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    {newMessage.length}/280 characters
                  </div>
                  <button
                    onClick={handleSendMessage}
                    disabled={!newMessage.trim()}
                    className="flex items-center space-x-2 bg-blue-500 hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed text-white px-4 py-2 rounded-lg transition-colors"
                  >
                    <Send size={16} />
                    <span>Post</span>
                  </button>
                </div>
              </div>
            </div>
          </Card>

          {/* Messages Feed */}
          <div className="space-y-4">
            {messages.map((message, index) => (
              <motion.div
                key={message.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6 hover:shadow-md transition-shadow">
                  <div className="flex space-x-4">
                    <img
                      src={message.avatar}
                      alt={message.user}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <div>
                          <h3 className="font-semibold text-gray-900 dark:text-white">
                            {message.user}
                          </h3>
                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            {message.timestamp}
                          </p>
                        </div>
                        <button className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">
                          <MoreVertical size={16} />
                        </button>
                      </div>
                      
                      <p className="text-gray-700 dark:text-gray-300 mb-4">
                        {message.message}
                      </p>
                      
                      <div className="flex items-center space-x-6">
                        <button
                          onClick={() => handleLike(message.id)}
                          className={`flex items-center space-x-2 transition-colors ${
                            message.liked 
                              ? 'text-red-500' 
                              : 'text-gray-500 hover:text-red-500'
                          }`}
                        >
                          <Heart 
                            size={16} 
                            className={message.liked ? 'fill-current' : ''} 
                          />
                          <span className="text-sm">{message.likes}</span>
                        </button>
                        
                        <button className="flex items-center space-x-2 text-gray-500 hover:text-blue-500 transition-colors">
                          <MessageCircle size={16} />
                          <span className="text-sm">{message.replies}</span>
                        </button>
                        
                        <button className="flex items-center space-x-2 text-gray-500 hover:text-green-500 transition-colors">
                          <Share size={16} />
                          <span className="text-sm">Share</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Online Members */}
          <Card className="p-6">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Online Members</h3>
            <div className="space-y-3">
              {[
                { name: 'Alex Chen', status: 'Active now', avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400' },
                { name: 'Sarah Johnson', status: '2 min ago', avatar: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=400' },
                { name: 'Michael Brown', status: '5 min ago', avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400' },
                { name: 'Emily Davis', status: '10 min ago', avatar: 'https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=400' },
              ].map((member) => (
                <div key={member.name} className="flex items-center space-x-3">
                  <div className="relative">
                    <img
                      src={member.avatar}
                      alt={member.name}
                      className="w-8 h-8 rounded-full object-cover"
                    />
                    <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 border-2 border-white dark:border-gray-800 rounded-full"></div>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900 dark:text-white">
                      {member.name}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      {member.status}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Popular Topics */}
          <Card className="p-6">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Trending Topics</h3>
            <div className="space-y-2">
              {[
                { tag: '#ReactJS', posts: 45 },
                { tag: '#MachineLearning', posts: 32 },
                { tag: '#AWS', posts: 28 },
                { tag: '#InterviewPrep', posts: 24 },
                { tag: '#OpenSource', posts: 18 }
              ].map((topic) => (
                <div key={topic.tag} className="flex items-center justify-between">
                  <span className="text-blue-500 hover:text-blue-600 cursor-pointer font-medium">
                    {topic.tag}
                  </span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {topic.posts} posts
                  </span>
                </div>
              ))}
            </div>
          </Card>

          {/* Community Stats */}
          <Card className="p-6">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Community Stats</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-300">Total Members</span>
                <span className="font-semibold text-gray-900 dark:text-white">2,847</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-300">Active Today</span>
                <span className="font-semibold text-gray-900 dark:text-white">423</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-300">Posts Today</span>
                <span className="font-semibold text-gray-900 dark:text-white">156</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-300">Your Rank</span>
                <span className="font-semibold text-blue-500">#145</span>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Community;