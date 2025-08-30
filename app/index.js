import React from 'react';
import { View, Text, TouchableOpacity, ImageBackground, SafeAreaView, StatusBar } from 'react-native';
import { useRouter } from 'expo-router';
 
export default function WelcomePage() {
  const router = useRouter();
 
  const handleGetStarted = () => {
    router.push('/login');
  };
 
  return (
<ImageBackground
      source={{
        uri: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
      }}
      className="flex-1 justify-center items-center"
      resizeMode="cover"
>
      {/* Gradient overlay for better visual appeal */}
<View className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
<View className="z-10 items-center px-8 fade-in">
        {/* App Icon */}
<View className="bg-white/20 p-6 rounded-full mb-8 backdrop-blur-sm">
<Text className="text-6xl">📚</Text>
</View>
        
<Text className="text-white text-5xl font-bold text-center mb-4 text-shadow">
          Welcome to LMS
</Text>
<Text className="text-blue-100 text-xl text-center mb-2 font-medium">
          Library Management System
</Text>
<Text className="text-white/80 text-base text-center mb-12 leading-6 max-w-sm">
          Streamline your library operations with our comprehensive digital solution
</Text>

        {/* Enhanced Button */}
<TouchableOpacity
          onPress={handleGetStarted}
          className="bg-gradient-to-r from-blue-500 to-purple-600 px-10 py-4 rounded-2xl shadow-2xl transform active:scale-95 transition-all duration-200"
          activeOpacity={0.9}
>
<View className="flex-row items-center">
<Text className="text-white text-lg font-bold mr-2">
              Get Started
</Text>
<Text className="text-white text-xl">→</Text>
</View>
</TouchableOpacity>

        {/* Features List */}
<View className="mt-12 flex-row flex-wrap justify-center gap-4">
<View className="bg-white/20 px-4 py-2 rounded-full backdrop-blur-sm">
<Text className="text-white text-sm font-medium">📖 Book Management</Text>
</View>
<View className="bg-white/20 px-4 py-2 rounded-full backdrop-blur-sm">
<Text className="text-white text-sm font-medium">👥 Member Management</Text>
</View>
<View className="bg-white/20 px-4 py-2 rounded-full backdrop-blur-sm">
<Text className="text-white text-sm font-medium">📊 Analytics</Text>
</View>
</View>
</View>
</ImageBackground>
  );
}
