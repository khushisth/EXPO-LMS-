import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, TextInput, Alert } from 'react-native';
import { useRouter } from 'expo-router';

export default function MembersPage() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');
  
  const members = [
    { id: 1, name: 'John Doe', email: 'john.doe@email.com', phone: '+1-234-567-8901', membershipId: 'LIB001', status: 'Active', booksIssued: 2 },
    { id: 2, name: 'Jane Smith', email: 'jane.smith@email.com', phone: '+1-234-567-8902', membershipId: 'LIB002', status: 'Active', booksIssued: 1 },
    { id: 3, name: 'Bob Johnson', email: 'bob.johnson@email.com', phone: '+1-234-567-8903', membershipId: 'LIB003', status: 'Suspended', booksIssued: 0 },
    { id: 4, name: 'Alice Brown', email: 'alice.brown@email.com', phone: '+1-234-567-8904', membershipId: 'LIB004', status: 'Active', booksIssued: 3 },
    { id: 5, name: 'Charlie Wilson', email: 'charlie.wilson@email.com', phone: '+1-234-567-8905', membershipId: 'LIB005', status: 'Inactive', booksIssued: 0 },
  ];

  const filteredMembers = members.filter(member => 
    member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    member.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
    member.membershipId.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const getStatusColor = (status) => {
    switch(status) {
      case 'Active': return 'status-active px-3 py-1 rounded-full';
      case 'Suspended': return 'status-issued px-3 py-1 rounded-full';
      case 'Inactive': return 'status-inactive px-3 py-1 rounded-full';
      default: return 'status-inactive px-3 py-1 rounded-full';
    }
  };

  const handleAddMember = () => {
    Alert.alert('Add Member', 'Add new member functionality to be implemented');
  };

  return (
    <ScrollView className="flex-1 bg-gray-50">
      <View className="bg-blue-600 pt-12 pb-6 px-6">
        <View className="flex-row justify-between items-center mb-4">
          <TouchableOpacity
            onPress={() => router.back()}
            className="bg-blue-700 px-3 py-2 rounded-lg"
          >
            <Text className="text-white">← Back</Text>
          </TouchableOpacity>
          <Text className="text-white text-xl font-bold">Member Management</Text>
          <TouchableOpacity
            onPress={handleAddMember}
            className="bg-green-600 px-3 py-2 rounded-lg"
          >
            <Text className="text-white">+ Add</Text>
          </TouchableOpacity>
        </View>
        
        <TextInput
          value={searchQuery}
          onChangeText={setSearchQuery}
          placeholder="Search members by name, email, or ID..."
          placeholderTextColor="#93c5fd"
          className="bg-blue-700 text-white px-4 py-3 rounded-lg"
        />
      </View>

      <View className="p-6">
        <Text className="text-lg font-semibold text-gray-800 mb-4">
          Total Members: {filteredMembers.length}
        </Text>

        {filteredMembers.map((member) => (
          <View key={member.id} className="bg-white rounded-xl p-4 mb-4 shadow-sm">
            <View className="flex-row justify-between items-start mb-2">
              <View className="flex-1">
                <Text className="text-lg font-semibold text-gray-800 mb-1">
                  {member.name}
                </Text>
                <Text className="text-gray-600 mb-1">{member.email}</Text>
                <Text className="text-gray-600 mb-1">{member.phone}</Text>
                <Text className="text-gray-500 text-sm mb-2">ID: {member.membershipId}</Text>
                <Text className="text-gray-600">Books Issued: {member.booksIssued}</Text>
              </View>
              <View className={`px-3 py-1 rounded-full ${getStatusColor(member.status)}`}>
                <Text className="text-sm font-medium">{member.status}</Text>
              </View>
            </View>
            
            <View className="flex-row justify-end space-x-2 mt-3">
              <TouchableOpacity className="bg-blue-100 px-4 py-2 rounded-lg">
                <Text className="text-blue-600 font-medium">Edit</Text>
              </TouchableOpacity>
              <TouchableOpacity className="bg-green-100 px-4 py-2 rounded-lg">
                <Text className="text-green-600 font-medium">View History</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}
