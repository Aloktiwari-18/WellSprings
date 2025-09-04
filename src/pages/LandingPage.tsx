import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Heart, Users, BookOpen, Sparkles } from 'lucide-react';
import { motion } from "framer-motion";

const LandingPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen font-['Poppins'] text-gray-800">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        {/* Background gradients */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-white to-green-100 opacity-70"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-200/20 to-green-200/20"></div>
        
        <div className="relative z-10 text-center max-w-5xl mx-auto px-6">
          {/* Hero Title */}
          <div className="mb-10">
            <div className="flex items-center justify-center mb-6">
              <Heart className="w-16 h-16 text-blue-500 mr-4" />
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-teal-500 via-blue-600 to-purple-600 bg-clip-text text-transparent tracking-tight">
                WellSpring
              </h1>
            </div>
            
            {/* Quote */}
            <blockquote className="relative text-center text-xl md:text-2xl font-medium leading-relaxed mb-14 px-6">
              <span className="absolute -left-4 -top-2 text-6xl text-teal-300 opacity-40">“</span>
              <motion.p
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 bg-clip-text text-transparent drop-shadow-sm"
              >
                Every journey begins with a single step towards growth, healing, and discovering your inner strength.
              </motion.p>
              <span className="absolute -right-4 -bottom-2 text-6xl text-purple-300 opacity-40">”</span>
            </blockquote>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center mb-20">
            <button
              onClick={() => navigate('/student-auth')}
              className="group bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600 text-white px-12 py-4 rounded-full text-lg font-semibold tracking-wide transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg"
            >
              <div className="flex items-center">
                <BookOpen className="w-6 h-6 mr-3 group-hover:rotate-12 transition-transform duration-300" />
                Student Portal
              </div>
            </button>
            
            <button
              onClick={() => navigate('/counsellor-auth')}
              className="group bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600 text-white px-12 py-4 rounded-full text-lg font-semibold tracking-wide transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg"
            >
              <div className="flex items-center">
                <Users className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform duration-300" />
                Counsellor Portal
              </div>
            </button>
          </div>

          {/* Features Preview */}
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {[
              {
                icon: <Heart className="w-12 h-12 text-blue-500 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />,
                title: "Wellness Tracking",
                desc: "Monitor your daily mood and progress with interactive insights"
              },
              {
                icon: <Users className="w-12 h-12 text-green-500 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />,
                title: "Anonymous Support",
                desc: "Connect with counsellors while maintaining complete privacy"
              },
              {
                icon: <Sparkles className="w-12 h-12 text-purple-500 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />,
                title: "Growth Resources",
                desc: "Access curated books, videos, and wellness content"
              }
            ].map((feature, idx) => (
              <div key={idx} className="text-center group">
                <div className="h-full bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col justify-between">
                  {feature.icon}
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 text-base">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white/90 backdrop-blur-sm border-t border-gray-200 py-8 mt-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <Heart className="w-8 h-8 text-blue-500 mr-3" />
              <span className="text-xl font-semibold bg-gradient-to-r from-blue-500 to-teal-500 bg-clip-text text-transparent">
                WellSpring
              </span>
            </div>
            
            <div className="flex space-x-8 text-gray-600 font-medium">
              <button 
                onClick={() => navigate('/about')}
                className="hover:text-blue-500 transition-colors duration-200"
              >
                About
              </button>
              <button 
                onClick={() => navigate('/privacy')}
                className="hover:text-blue-500 transition-colors duration-200"
              >
                Privacy Policy
              </button>
              <button 
                onClick={() => navigate('/help')}
                className="hover:text-blue-500 transition-colors duration-200"
              >
                Help
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
