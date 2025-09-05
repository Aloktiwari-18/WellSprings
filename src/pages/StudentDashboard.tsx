import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import StudentNavbar from '../components/StudentNavbar';
import WellbeingTracker from '../components/WellbeingTracker';
import MotivationalQuotes from '../components/MotivationalQuotes';
import ChatbotAssistant from '../components/ChatbotAssistant';
import DailyReflection from '../components/DailyReflection';
import QuickActions from '../components/QuickActions';
import { motion } from 'framer-motion';

// ✅ Mood Emoji Component
const DailyWellbeingEmojis: React.FC = () => {
  const [selectedMood, setSelectedMood] = useState<string | null>(null);

  const moods = [
    { emoji: "😢", label: "Very Low", color: "text-red-500" },
    { emoji: "😟", label: "Low", color: "text-orange-500" },
    { emoji: "😐", label: "Okay", color: "text-yellow-500" },
    { emoji: "😊", label: "Good", color: "text-green-500" },
    { emoji: "🤩", label: "Excellent", color: "text-blue-500" },
  ];

  return (
    <div className="p-6 bg-white rounded-3xl shadow-xl">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        How are you feeling today?
      </h2>

      <div className="grid grid-cols-5 gap-4">
        {moods.map((mood, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.2, rotate: 5 }}
            whileTap={{ scale: 0.9, rotate: -5 }}
            onClick={() => setSelectedMood(mood.label)}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
            className={`flex flex-col items-center justify-center p-4 rounded-xl cursor-pointer bg-gray-50 hover:shadow-lg ${
              selectedMood === mood.label
                ? "bg-pink-100 ring-2 ring-pink-400 shadow-2xl"
                : ""
            }`}
          >
            <span
              className="text-4xl"
              style={{
                fontFamily: 'Apple Color Emoji, Segoe UI Emoji, NotoColorEmoji, sans-serif',
                filter: "drop-shadow(0px 4px 6px rgba(0,0,0,0.2))",
              }}
            >
              {mood.emoji}
            </span>
            <p className={`mt-2 font-semibold ${mood.color}`}>{mood.label}</p>
          </motion.div>
        ))}
      </div>

      {selectedMood && (
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mt-6 p-4 bg-gradient-to-r from-pink-100 to-pink-200 text-pink-700 font-semibold rounded-xl shadow-md text-center"
        >
          ✅ You selected <span className="font-bold">{selectedMood}</span> mood today!
        </motion.div>
      )}
    </div>
  );
};

const StudentDashboard: React.FC = () => {
  const { user } = useAuth();
  const [activeSection, setActiveSection] = useState('dashboard');

  if (!user || user.role !== 'student') {
    return <div>Access denied</div>;
  }

  const renderSection = () => {
    switch (activeSection) {
      case 'dashboard':
        return (
          <div className="space-y-12">
            {/* Welcome Section */}
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: -40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              <h1 className="text-5xl font-extrabold bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-500 bg-clip-text text-transparent drop-shadow-xl mb-4">
                Welcome to Your Wellness Journey
              </h1>
              <p className="text-gray-700 text-lg md:text-xl italic tracking-wide animate-pulse">
                How are you feeling today? Let's track your progress together.
              </p>
            </motion.div>

            {/* Tracker + Reflection + Emojis */}
            <div className="grid lg:grid-cols-3 gap-10">
              <motion.div
                className="lg:col-span-2 space-y-10"
                initial={{ opacity: 0, x: -60 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: 'easeOut' }}
              >
                <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }}>
                  <WellbeingTracker />
                </motion.div>

                {/* ✅ Emoji Component */}
                <DailyWellbeingEmojis />

                <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }}>
                  <DailyReflection />
                </motion.div>
              </motion.div>

              {/* Inspiration + Quick Actions */}
              <motion.div
                className="space-y-10"
                initial={{ opacity: 0, x: 60 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: 'easeOut' }}
              >
                <motion.div whileHover={{ rotate: 1.5, scale: 1.02 }} transition={{ duration: 0.3 }}>
                  <MotivationalQuotes />
                </motion.div>

                <motion.div whileHover={{ rotate: -1.5, scale: 1.02 }} transition={{ duration: 0.3 }}>
                  <QuickActions />
                </motion.div>
              </motion.div>
            </div>
          </div>
        );
      case 'chat':
        return <ChatbotAssistant />;
      case 'inspiration':
        return (
          <div className="space-y-8">
            <MotivationalQuotes />
            <QuickActions />
          </div>
        );
      default:
        return <div>Section not found</div>;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-green-500 opacity-95 overflow-x-hidden">
      <StudentNavbar activeSection={activeSection} setActiveSection={setActiveSection} />
      <main className="max-w-7xl mx-auto px-6 py-12">
        {renderSection()}
      </main>
    </div>
  );
};

export default StudentDashboard;
