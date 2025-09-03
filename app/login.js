import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Alert, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
 
export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
 
  const handleLogin = async () => {
    try{
      if (!email.trim() || !password.trim()) {
        Alert.alert('Error', 'Please fill in all fields');
        return;
      }
 
      // Simple validation for demo - you can replace with real authentication
      if (email && password) {
        router.push('/dashboard');
      } else {
        Alert.alert('Error', 'Invalid credentials');
      }
    }catch(error){
      Alert.alert('Error', 'Login failed');
    }
  };
 
  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.loginCard}>
          <Text style={styles.title}>
            Welcome to LMS
          </Text>
          <Text style={styles.subtitle}>
            Sign in to your librarian account
          </Text>
          
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Email</Text>
            <TextInput
              value={email}
              onChangeText={setEmail}
              placeholder="Enter your email"
              keyboardType="email-address"
              autoCapitalize="none"
              style={styles.textInput}
              placeholderTextColor="#9ca3af"
            />
          </View>
          
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Password</Text>
            <TextInput
              value={password}
              onChangeText={setPassword}
              placeholder="Enter your password"
              secureTextEntry
              style={styles.textInput}
              placeholderTextColor="#9ca3af"
            />
          </View>
          
          <TouchableOpacity
            onPress={handleLogin}
            style={styles.loginButton}
            activeOpacity={0.8}
          >
            <Text style={styles.loginButtonText}>
              Login
            </Text>
          </TouchableOpacity>
          
          <TouchableOpacity
            onPress={() => router.back()}
            style={styles.backButton}
            activeOpacity={0.7}
          >
            <Text style={styles.backButtonText}>
              Back to Welcome
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9fafb',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 32,
    paddingVertical: 48,
  },
  loginCard: {
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 32,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 8,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#1f2937',
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitle: {
    color: '#6b7280',
    textAlign: 'center',
    marginBottom: 32,
    fontSize: 16,
  },
  inputContainer: {
    marginBottom: 24,
  },
  label: {
    color: '#374151',
    fontWeight: '500',
    marginBottom: 8,
    fontSize: 16,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#d1d5db',
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
    color: '#1f2937',
    backgroundColor: '#f9fafb',
    fontSize: 16,
  },
  loginButton: {
    backgroundColor: '#2563eb',
    paddingVertical: 16,
    borderRadius: 8,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  loginButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
  },
  backButton: {
    paddingVertical: 8,
  },
  backButtonText: {
    color: '#2563eb',
    textAlign: 'center',
    fontSize: 16,
  },
});
