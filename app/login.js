import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Alert, SafeAreaView, StatusBar } from 'react-native';
import { useRouter } from 'expo-router';
// import axios from 'axios'; // Uncomment when implementing actual API calls
 
export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
 
  const handleLogin = async () => {
    try {
      if (!email.trim() || !password.trim()) {
        Alert.alert('Error', 'Please fill in all fields');
        return;
      }
 
      // Simple validation for demo - you can replace with real authentication
      if (email && password) {
        // const response = await axios.post('http://192.168.46.220:8000/api/librarian/login',{
        //   email,
        //   password,
        // });
        // console.log(response);
        // const token=response.data.token
        router.push('/dashboard');
      } else {
        Alert.alert('Error', 'Invalid credentials');
      }
    } catch(error) {
      Alert.alert('Error', 'Login failed');
    }
  };
 
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#f8fafc'}}>
      <StatusBar barStyle="dark-content" backgroundColor="#f8fafc" />
      <ScrollView style={{flex: 1}} contentContainerStyle={{flexGrow: 1}}>
        <View style={{
          flex: 1,
          justifyContent: 'center',
          paddingHorizontal: 32,
          paddingVertical: 48
        }}>
          <View style={{
            backgroundColor: 'white',
            borderRadius: 24,
            padding: 32,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.1,
            shadowRadius: 12,
            elevation: 8
          }}>
            {/* Header */}
            <View style={{alignItems: 'center', marginBottom: 32}}>
              <View style={{
                backgroundColor: '#2563eb',
                padding: 16,
                borderRadius: 50,
                marginBottom: 16
              }}>
                <Text style={{fontSize: 32}}>📚</Text>
              </View>
              
              <Text style={{
                fontSize: 28,
                fontWeight: 'bold',
                color: '#1f2937',
                textAlign: 'center',
                marginBottom: 8
              }}>
                Welcome to LMS
              </Text>
              
              <Text style={{
                fontSize: 16,
                color: '#6b7280',
                textAlign: 'center'
              }}>
                Sign in to your librarian account
              </Text>
            </View>

            {/* Email Input */}
            <View style={{marginBottom: 24}}>
              <Text style={{
                fontSize: 16,
                fontWeight: '500',
                color: '#374151',
                marginBottom: 8
              }}>
                Email
              </Text>
              <TextInput
                value={email}
                onChangeText={setEmail}
                placeholder="Enter your email"
                keyboardType="email-address"
                autoCapitalize="none"
                style={{
                  borderWidth: 2,
                  borderColor: '#e5e7eb',
                  borderRadius: 12,
                  paddingHorizontal: 16,
                  paddingVertical: 12,
                  fontSize: 16,
                  color: '#1f2937',
                  backgroundColor: '#f9fafb'
                }}
                placeholderTextColor="#9ca3af"
              />
            </View>

            {/* Password Input */}
            <View style={{marginBottom: 32}}>
              <Text style={{
                fontSize: 16,
                fontWeight: '500',
                color: '#374151',
                marginBottom: 8
              }}>
                Password
              </Text>
              <TextInput
                value={password}
                onChangeText={setPassword}
                placeholder="Enter your password"
                secureTextEntry
                style={{
                  borderWidth: 2,
                  borderColor: '#e5e7eb',
                  borderRadius: 12,
                  paddingHorizontal: 16,
                  paddingVertical: 12,
                  fontSize: 16,
                  color: '#1f2937',
                  backgroundColor: '#f9fafb'
                }}
                placeholderTextColor="#9ca3af"
              />
            </View>

            {/* Login Button */}
            <TouchableOpacity
              onPress={handleLogin}
              style={{
                backgroundColor: '#2563eb',
                paddingVertical: 16,
                borderRadius: 12,
                marginBottom: 16,
                shadowColor: '#2563eb',
                shadowOffset: { width: 0, height: 4 },
                shadowOpacity: 0.3,
                shadowRadius: 8,
                elevation: 8
              }}
              activeOpacity={0.8}
            >
              <Text style={{
                color: 'white',
                fontSize: 18,
                fontWeight: '600',
                textAlign: 'center'
              }}>
                Login
              </Text>
            </TouchableOpacity>

            {/* Back Button */}
            <TouchableOpacity
              onPress={() => router.back()}
              style={{
                paddingVertical: 8
              }}
              activeOpacity={0.7}
            >
              <Text style={{
                color: '#2563eb',
                fontSize: 16,
                textAlign: 'center'
              }}>
                Back to Welcome
              </Text>
            </TouchableOpacity>
          </View>

          {/* Demo Credentials */}
          <View style={{
            marginTop: 24,
            padding: 16,
            backgroundColor: 'rgba(37, 99, 235, 0.1)',
            borderRadius: 12,
            borderWidth: 1,
            borderColor: 'rgba(37, 99, 235, 0.2)'
          }}>
            <Text style={{
              fontSize: 14,
              color: '#2563eb',
              textAlign: 'center',
              fontWeight: '500'
            }}>
              Demo: Use any email and password to login
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
