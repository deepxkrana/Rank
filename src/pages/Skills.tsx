import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, Github, Code, Linkedin, ExternalLink, Trash2, Edit } from 'lucide-react';
import Card from '../components/UI/Card';

const Skills: React.FC = () => {
  const [skills, setSkills] = useState([
    { id: 1, name: 'React', level: 85, category: 'Frontend' },
    { id: 2, name: 'Node.js', level: 78, category: 'Backend' },
    { id: 3, name: 'Python', level: 90, category: 'Programming' },
    { id: 4, name: 'AWS', level: 65, category: 'Cloud' },
    { id: 5, name: 'MongoDB', level: 72, category: 'Database' },
    { id: 6, name: 'TypeScript', level: 88, category: 'Programming' },
  ]);

  const [accounts, setAccounts] = useState([
    { platform: 'GitHub', username: 'taylor-smith', connected: true, stats: { repos: 23, stars: 156 } },
    { platform: 'LeetCode', username: 'taylor_codes', connected: true, stats: { solved: 234, rating: 1650 } },
    { platform: 'LinkedIn', username: 'taylor-smith-dev', connected: false, stats: null },
  ]);

  const [newSkill, setNewSkill] = useState({ name: '', level: 50, category: 'Programming' });
  const [showAddSkill, setShowAddSkill] = useState(false);

  const categories = ['Programming', 'Frontend', 'Backend', 'Database', 'Cloud', 'Mobile', 'DevOps'];

  const handleAddSkill = () => {
    if (newSkill.name.trim()) {
      setSkills([...skills, { 
        id: Date.now(), 
        name: newSkill.name, 
        level: newSkill.level, 
        category: newSkill.category 
      }]);
      setNewSkill({ name: '', level: 50, category: 'Programming' });
      setShowAddSkill(false);
    }
  };

  const handleDeleteSkill = (id: number) => {
    setSkills(skills.filter(skill => skill.id !== id));
  };

  const getLevelColor = (level: number) => {
    if (level >= 80) return 'bg-green-500';
    if (level >= 60) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  const getPlatformIcon = (platform: string) => {
    switch (platform) {
      case 'GitHub': return <Github size={20} />;
      case 'LeetCode': return <Code size={20} />;
      case 'LinkedIn': return <Linkedin size={20} />;
      default: return <ExternalLink size={20} />;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Skills</h1>
          <p className="text-gray-600 dark:text-gray-300 mt-1">
            Track your technical skills and connect your accounts
          </p>
        </div>
        <button
          onClick={() => setShowAddSkill(true)}
          className="flex items-center space-x-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors"
        >
          <Plus size={16} />
          <span>Add Skill</span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Skills List */}
        <div className="lg:col-span-2 space-y-6">
          {/* Add Skill Form */}
          {showAddSkill && (
            <Card className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Add New Skill</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <input
                  type="text"
                  placeholder="Skill name"
                  value={newSkill.name}
                  onChange={(e) => setNewSkill({ ...newSkill, name: e.target.value })}
                  className="px-3 py-2 border border-gray-200 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                />
                <select
                  value={newSkill.category}
                  onChange={(e) => setNewSkill({ ...newSkill, category: e.target.value })}
                  className="px-3 py-2 border border-gray-200 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                >
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
                <div className="flex space-x-2">
                  <button
                    onClick={handleAddSkill}
                    className="flex-1 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors"
                  >
                    Add
                  </button>
                  <button
                    onClick={() => setShowAddSkill(false)}
                    className="px-4 py-2 text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white transition-colors"
                  >
                    Cancel
                  </button>
                </div>
              </div>
              <div className="mt-4">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Skill Level: {newSkill.level}%
                </label>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={newSkill.level}
                  onChange={(e) => setNewSkill({ ...newSkill, level: parseInt(e.target.value) })}
                  className="w-full"
                />
              </div>
            </Card>
          )}

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-4 hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">{skill.name}</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{skill.category}</p>
                    </div>
                    <div className="flex space-x-2">
                      <button className="text-gray-400 hover:text-blue-500 transition-colors">
                        <Edit size={16} />
                      </button>
                      <button 
                        onClick={() => handleDeleteSkill(skill.id)}
                        className="text-gray-400 hover:text-red-500 transition-colors"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600 dark:text-gray-300">Proficiency</span>
                      <span className="font-medium text-gray-900 dark:text-white">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div 
                        className={`${getLevelColor(skill.level)} h-2 rounded-full transition-all duration-300`}
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Account Linking Sidebar */}
        <div className="space-y-6">
          <Card className="p-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Connected Accounts</h3>
            <div className="space-y-4">
              {accounts.map((account, index) => (
                <motion.div
                  key={account.platform}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`p-4 rounded-lg border-2 transition-all ${
                    account.connected 
                      ? 'border-green-200 bg-green-50 dark:border-green-800 dark:bg-green-900/20' 
                      : 'border-gray-200 bg-gray-50 dark:border-gray-700 dark:bg-gray-800'
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <div className={`p-2 rounded-lg ${
                        account.connected ? 'bg-green-100 dark:bg-green-800' : 'bg-gray-100 dark:bg-gray-700'
                      }`}>
                        {getPlatformIcon(account.platform)}
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900 dark:text-white">{account.platform}</h4>
                        {account.connected && (
                          <p className="text-sm text-gray-600 dark:text-gray-300">@{account.username}</p>
                        )}
                      </div>
                    </div>
                    <div className={`px-2 py-1 rounded text-xs font-medium ${
                      account.connected 
                        ? 'bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-200' 
                        : 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300'
                    }`}>
                      {account.connected ? 'Connected' : 'Not Connected'}
                    </div>
                  </div>
                  
                  {account.connected && account.stats && (
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      {Object.entries(account.stats).map(([key, value]) => (
                        <div key={key}>
                          <span className="text-gray-500 dark:text-gray-400 capitalize">{key}:</span>
                          <span className="ml-1 font-medium text-gray-900 dark:text-white">{value}</span>
                        </div>
                      ))}
                    </div>
                  )}
                  
                  {!account.connected && (
                    <input
                      type="text"
                      placeholder={`${account.platform} username`}
                      className="w-full mt-2 px-3 py-2 border border-gray-200 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm"
                    />
                  )}
                  
                  <button className={`w-full mt-3 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    account.connected 
                      ? 'bg-red-100 text-red-700 hover:bg-red-200 dark:bg-red-900 dark:text-red-200 dark:hover:bg-red-800' 
                      : 'bg-blue-500 text-white hover:bg-blue-600'
                  }`}>
                    {account.connected ? 'Disconnect' : 'Connect'}
                  </button>
                </motion.div>
              ))}
            </div>
          </Card>

          {/* Skill Summary */}
          <Card className="p-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Skill Summary</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-300">Total Skills</span>
                <span className="font-semibold text-gray-900 dark:text-white">{skills.length}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-300">Expert Level</span>
                <span className="font-semibold text-gray-900 dark:text-white">
                  {skills.filter(s => s.level >= 80).length}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-300">Learning</span>
                <span className="font-semibold text-gray-900 dark:text-white">
                  {skills.filter(s => s.level < 60).length}
                </span>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Skills;