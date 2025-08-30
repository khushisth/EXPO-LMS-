import React from 'react';
import { View, Text, TouchableOpacity, ImageBackground, SafeAreaView, StatusBar } from 'react-native';
import { useRouter } from 'expo-router';
 
export default function WelcomePage() {
  const router = useRouter();
 
  const handleGetStarted = () => {
    router.push('/login');
  };
 
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
      <ImageBackground
        source={{
          uri: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
        }}
        style={{flex: 1}}
        resizeMode="cover"
      >
        {/* Gradient overlay */}
        <View style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0,0,0,0.6)'
        }} />
        
        <View style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          paddingHorizontal: 32,
          zIndex: 10
        }}>
          {/* App Icon */}
          <View style={{
            backgroundColor: 'rgba(255,255,255,0.2)',
            padding: 24,
            borderRadius: 50,
            marginBottom: 32
          }}>
            <Text style={{fontSize: 48}}>📚</Text>
          </View>
          
          <Text style={{
            color: 'white',
            fontSize: 40,
            fontWeight: 'bold',
            textAlign: 'center',
            marginBottom: 8
          }}>
            Welcome to LMS
          </Text>
          
          <Text style={{
            color: '#93c5fd',
            fontSize: 20,
            fontWeight: '500',
            textAlign: 'center',
            marginBottom: 8
          }}>
            Library Management System
          </Text>
          
          <Text style={{
            color: 'rgba(255,255,255,0.8)',
            fontSize: 16,
            textAlign: 'center',
            marginBottom: 48,
            lineHeight: 24,
            maxWidth: 280
          }}>
            Streamline your library operations with our comprehensive digital solution
          </Text>
          
          <TouchableOpacity
            onPress={handleGetStarted}
            style={{
              backgroundColor: '#2563eb',
              paddingHorizontal: 40,
              paddingVertical: 16,
              borderRadius: 16,
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 4 },
              shadowOpacity: 0.3,
              shadowRadius: 8,
              elevation: 8,
              flexDirection: 'row',
              alignItems: 'center'
            }}
            activeOpacity={0.8}
          >
            <Text style={{
              color: 'white',
              fontSize: 18,
              fontWeight: 'bold',
              marginRight: 8
            }}>
              Get Started
            </Text>
            <Text style={{color: 'white', fontSize: 20}}>→</Text>
          </TouchableOpacity>

          {/* Features */}
          <View style={{
            marginTop: 48,
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: 16
          }}>
            <View style={{
              backgroundColor: 'rgba(255,255,255,0.2)',
              paddingHorizontal: 16,
              paddingVertical: 8,
              borderRadius: 20
            }}>
              <Text style={{color: 'white', fontSize: 14, fontWeight: '500'}}>📖 Book Management</Text>
            </View>
            <View style={{
              backgroundColor: 'rgba(255,255,255,0.2)',
              paddingHorizontal: 16,
              paddingVertical: 8,
              borderRadius: 20
            }}>
              <Text style={{color: 'white', fontSize: 14, fontWeight: '500'}}>👥 Member Management</Text>
            </View>
            <View style={{
              backgroundColor: 'rgba(255,255,255,0.2)',
              paddingHorizontal: 16,
              paddingVertical: 8,
              borderRadius: 20
            }}>
              <Text style={{color: 'white', fontSize: 14, fontWeight: '500'}}>📊 Analytics</Text>
            </View>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}
