import { Download, Star, Users, Zap, Target, Heart, Instagram } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 py-20 text-center text-white">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-pink-400 to-orange-400 bg-clip-text text-transparent">
              FitVibez
            </h1>
            <p className="text-xl md:text-2xl mb-4 text-gray-200">
              Your AI-Powered Personal Fitness Companion
            </p>
            <p className="text-lg md:text-xl mb-12 text-gray-300 max-w-2xl mx-auto">
              Get personalized workouts that adapt to your mood, time, goals, and fitness level. 
              Never wonder what to do in the gym again!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="bg-gradient-to-r from-pink-500 to-orange-500 hover:from-pink-600 hover:to-orange-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
                <Download className="inline-block mr-2" size={20} />
                Download for iOS
              </button>
              <button className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
                <Download className="inline-block mr-2" size={20} />
                Download for Android
              </button>
            </div>
          </div>
        </div>
        {/* Animated background elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-pink-500/20 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-orange-500/20 rounded-full animate-bounce"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-blue-500/20 rounded-full animate-ping"></div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose FitVibez?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Experience the future of fitness with AI-powered personalization and social motivation
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* AI Workouts */}
            <div className="bg-gradient-to-br from-purple-800/50 to-pink-800/50 p-8 rounded-2xl backdrop-blur-sm border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 transform hover:scale-105">
              <div className="bg-gradient-to-br from-purple-500 to-pink-500 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Zap className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">AI-Powered Workouts</h3>
              <p className="text-gray-300 mb-6">
                Get personalized workout plans based on your mood, available time, fitness goals, and target muscle groups. Our AI adapts to you!
              </p>
              <ul className="text-gray-400 space-y-2">
                <li>• Mood-based recommendations</li>
                <li>• Time-flexible routines</li>
                <li>• Goal-oriented training</li>
                <li>• Muscle group targeting</li>
              </ul>
            </div>

            {/* Social Features */}
            <div className="bg-gradient-to-br from-blue-800/50 to-cyan-800/50 p-8 rounded-2xl backdrop-blur-sm border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300 transform hover:scale-105">
              <div className="bg-gradient-to-br from-blue-500 to-cyan-500 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Users className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Social Fitness</h3>
              <p className="text-gray-300 mb-6">
                Connect with friends, share workouts, and stay motivated together. See what others are doing and rate their routines!
              </p>
              <ul className="text-gray-400 space-y-2">
                <li>• Add workout buddies</li>
                <li>• Share your routines</li>
                <li>• Rate friend&apos;s workouts</li>
                <li>• Stay motivated together</li>
              </ul>
            </div>

            {/* Smart Adaptation */}
            <div className="bg-gradient-to-br from-orange-800/50 to-red-800/50 p-8 rounded-2xl backdrop-blur-sm border border-orange-500/20 hover:border-orange-400/40 transition-all duration-300 transform hover:scale-105">
              <div className="bg-gradient-to-br from-orange-500 to-red-500 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Target className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Smart Adaptation</h3>
              <p className="text-gray-300 mb-6">
                Don&apos;t like a workout? Generate a new one instantly with the same parameters. Find your perfect fit every time!
              </p>
              <ul className="text-gray-400 space-y-2">
                <li>• Instant regeneration</li>
                <li>• Like/dislike system</li>
                <li>• Personal preferences</li>
                <li>• Perfect workout matching</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* App Preview Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-900 to-purple-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              See FitVibez in Action
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Beautiful, intuitive design that makes working out feel effortless
            </p>
          </div>
          
          <div className="flex flex-col lg:flex-row items-center justify-center gap-12 max-w-6xl mx-auto">
            {/* Phone mockups */}
            <div className="flex gap-4 justify-center">
              <div className="relative">
                <div className="w-64 h-96 bg-gray-800 rounded-3xl p-2 shadow-2xl">
                  <div className="w-full h-full bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center">
                    <div className="text-center text-white">
                      <Zap size={48} className="mx-auto mb-4" />
                      <p className="font-semibold">AI Workout Generator</p>
                      <p className="text-sm opacity-80 mt-2">Screenshot placeholder</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="relative -ml-8 mt-8">
                <div className="w-64 h-96 bg-gray-800 rounded-3xl p-2 shadow-2xl">
                  <div className="w-full h-full bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl flex items-center justify-center">
                    <div className="text-center text-white">
                      <Users size={48} className="mx-auto mb-4" />
                      <p className="font-semibold">Social Features</p>
                      <p className="text-sm opacity-80 mt-2">Screenshot placeholder</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Features list */}
            <div className="lg:max-w-md">
              <h3 className="text-3xl font-bold text-white mb-8">Everything You Need</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-pink-500 p-2 rounded-full flex-shrink-0">
                    <Heart size={20} className="text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-2">Mood-Based Training</h4>
                    <p className="text-gray-300">Feeling energetic or just want to relax? We&apos;ve got the perfect workout for your vibe.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-blue-500 p-2 rounded-full flex-shrink-0">
                    <Target size={20} className="text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-2">Flexible Duration</h4>
                    <p className="text-gray-300">15 minutes or 2 hours? Tell us your available time and get the perfect workout length.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-orange-500 p-2 rounded-full flex-shrink-0">
                    <Users size={20} className="text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-2">Friend Connection</h4>
                    <p className="text-gray-300">Share your progress, get inspired by friends, and build a supportive fitness community.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              What Our Users Say
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-gradient-to-br from-purple-800/30 to-pink-800/30 p-8 rounded-2xl backdrop-blur-sm border border-purple-500/20">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} className="text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-300 mb-6 italic">
                &quot;FitVibez completely changed how I approach workouts. The AI always knows exactly what I need!&quot;
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-orange-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  S
                </div>
                <div className="ml-4">
                  <p className="text-white font-semibold">Sarah Johnson</p>
                  <p className="text-gray-400 text-sm">Fitness Enthusiast</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-800/30 to-cyan-800/30 p-8 rounded-2xl backdrop-blur-sm border border-blue-500/20">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} className="text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-300 mb-6 italic">
                &quot;The social features keep me motivated. Seeing my friends&apos; workouts pushes me to do better!&quot;
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  M
                </div>
                <div className="ml-4">
                  <p className="text-white font-semibold">Mike Rodriguez</p>
                  <p className="text-gray-400 text-sm">Personal Trainer</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-orange-800/30 to-red-800/30 p-8 rounded-2xl backdrop-blur-sm border border-orange-500/20">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} className="text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-300 mb-6 italic">
                &quot;Finally, an app that understands my busy schedule. Quick 20-minute workouts that actually work!&quot;
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  A
                </div>
                <div className="ml-4">
                  <p className="text-white font-semibold">Amanda Chen</p>
                  <p className="text-gray-400 text-sm">Busy Professional</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Download CTA Section */}
      <section className="py-20 bg-gradient-to-r from-pink-600 to-orange-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Fitness Journey?
          </h2>
          <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
            Join thousands of users who&apos;ve already discovered their perfect workout routine with FitVibez.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <button className="bg-black hover:bg-gray-800 text-white px-12 py-6 rounded-2xl text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-2xl flex items-center gap-4">
              <div className="w-8 h-8 bg-white rounded-md flex items-center justify-center">
                <span className="text-black font-bold text-sm">📱</span>
              </div>
              <div className="text-left">
                <div className="text-sm opacity-80">Download on the</div>
                <div className="text-xl font-bold">App Store</div>
              </div>
            </button>
            
            <button className="bg-black hover:bg-gray-800 text-white px-12 py-6 rounded-2xl text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-2xl flex items-center gap-4">
              <div className="w-8 h-8 bg-white rounded-md flex items-center justify-center">
                <span className="text-black font-bold text-sm">▶️</span>
              </div>
              <div className="text-left">
                <div className="text-sm opacity-80">Get it on</div>
                <div className="text-xl font-bold">Google Play</div>
              </div>
            </button>
          </div>
          
          <p className="text-white/80 text-lg">
            Free to download • Premium features available
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-8 md:mb-0">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-pink-400 to-orange-400 bg-clip-text text-transparent mb-2">
                FitVibez
              </h3>
              <p className="text-gray-400">Your AI-Powered Personal Fitness Companion</p>
            </div>
            
            <div className="flex items-center gap-6">
              <p className="text-gray-400">Follow us:</p>
              <a 
                href="#" 
                className="bg-gradient-to-br from-pink-500 to-purple-500 p-3 rounded-full hover:from-pink-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-110"
                aria-label="Follow us on Instagram"
              >
                <Instagram size={24} className="text-white" />
              </a>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-gray-800 text-center">
            <p className="text-gray-400">
              © 2024 FitVibez. All rights reserved. Made with ❤️ for fitness enthusiasts.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
