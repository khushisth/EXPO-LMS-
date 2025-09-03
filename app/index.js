import React from 'react';
import { View, Text, TouchableOpacity, ImageBackground, StyleSheet } from 'react-native';
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
      style={styles.background}
      resizeMode="cover"
    >
      {/* Dark overlay for better text readability */}
      <View style={styles.overlay} />
      <View style={styles.content}>
        <Text style={styles.title}>
          Welcome to LMS
        </Text>
        <Text style={styles.subtitle}>
          Your comprehensive Library Management System
        </Text>
        <TouchableOpacity
          onPress={handleGetStarted}
          style={styles.button}
          activeOpacity={0.8}
        >
          <Text style={styles.buttonText}>
            Get Started
          </Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  content: {
    zIndex: 10,
    alignItems: 'center',
    paddingHorizontal: 32,
  },
  title: {
    color: 'white',
    fontSize: 36,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 32,
  },
  subtitle: {
    color: 'rgba(255, 255, 255, 0.9)',
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 48,
    lineHeight: 24,
  },
  button: {
    backgroundColor: '#2563eb',
    paddingHorizontal: 32,
    paddingVertical: 16,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 8,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },
});
