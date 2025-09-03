import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, SafeAreaView, TextInput, Alert } from 'react-native';
import { useRouter } from 'expo-router';
 
export default function MembersPage() {
  const router = useRouter();
  const [members, setMembers] = useState([
    { id: 1, name: 'John Doe', email: 'john@example.com', phone: '+1234567890', membershipDate: '2024-01-15' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', phone: '+0987654321', membershipDate: '2024-02-20' },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com', phone: '+1122334455', membershipDate: '2024-03-10' },
  ]);
  const [showAddForm, setShowAddForm] = useState(false);
  const [newMember, setNewMember] = useState({ name: '', email: '', phone: '' });
 
  const handleAddMember = () => {
    if (!newMember.name || !newMember.email || !newMember.phone) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }
 
    const member = {
      id: members.length + 1,
      ...newMember,
      membershipDate: new Date().toISOString().split('T')[0]
    };
 
    setMembers([...members, member]);
    setNewMember({ name: '', email: '', phone: '' });
    setShowAddForm(false);
    Alert.alert('Success', 'Member added successfully');
  };
 
  const handleDeleteMember = (id) => {
    Alert.alert(
      'Confirm Delete',
      'Are you sure you want to delete this member?',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Delete',
          style: 'destructive',
          onPress: () => setMembers(members.filter(member => member.id !== id))
        }
      ]
    );
  };
 
  return (
<SafeAreaView className="flex-1 bg-gray-50">
<View className="bg-green-600 px-6 py-4 rounded-b-3xl flex-row items-center justify-between">
<TouchableOpacity onPress={() => router.back()}>
<Text className="text-white text-lg">← Back</Text>
</TouchableOpacity>
<Text className="text-white text-xl font-bold">Manage Members</Text>
<TouchableOpacity onPress={() => setShowAddForm(!showAddForm)}>
<Text className="text-white text-lg">+ Add</Text>
</TouchableOpacity>
</View>
 
      {showAddForm && (
<View className="bg-white mx-4 mt-4 p-4 rounded-xl shadow-sm">
<Text className="text-lg font-semibold text-gray-800 mb-4">Add New Member</Text>
<TextInput
            value={newMember.name}
            onChangeText={(text) => setNewMember({...newMember, name: text})}
            placeholder="Full Name"
            className="border border-gray-300 rounded-lg px-4 py-3 mb-3 bg-gray-50"
          />
<TextInput
            value={newMember.email}
            onChangeText={(text) => setNewMember({...newMember, email: text})}
            placeholder="Email"
            keyboardType="email-address"
            autoCapitalize="none"
            className="border border-gray-300 rounded-lg px-4 py-3 mb-3 bg-gray-50"
          />
<TextInput
            value={newMember.phone}
            onChangeText={(text) => setNewMember({...newMember, phone: text})}
            placeholder="Phone Number"
            keyboardType="phone-pad"
            className="border border-gray-300 rounded-lg px-4 py-3 mb-4 bg-gray-50"
          />
<View className="flex-row space-x-3">
<TouchableOpacity
              onPress={handleAddMember}
              className="flex-1 bg-green-600 py-3 rounded-lg"
>
<Text className="text-white text-center font-semibold">Add Member</Text>
</TouchableOpacity>
<TouchableOpacity
              onPress={() => setShowAddForm(false)}
              className="flex-1 bg-gray-300 py-3 rounded-lg"
>
<Text className="text-gray-700 text-center font-semibold">Cancel</Text>
</TouchableOpacity>
</View>
</View>
      )}
 
<ScrollView className="flex-1 px-4 pt-4">
        {members.map((member) => (
<View key={member.id} className="bg-white rounded-xl p-4 mb-3 shadow-sm">
<View className="flex-row justify-between items-start">
<View className="flex-1">
<Text className="text-lg font-semibold text-gray-800">{member.name}</Text>
<Text className="text-gray-600">{member.email}</Text>
<Text className="text-gray-500 text-sm">{member.phone}</Text>
<Text className="text-gray-400 text-xs mt-1">
                  Member since: {member.membershipDate}
</Text>
</View>
<TouchableOpacity
                onPress={() => handleDeleteMember(member.id)}
                className="p-2"
>
<Text className="text-red-500 text-lg">🗑️</Text>
</TouchableOpacity>
</View>
</View>
        ))}
</ScrollView>
</SafeAreaView>
  );
}
