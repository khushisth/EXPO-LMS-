import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, TextInput, Alert } from 'react-native';
import { useRouter } from 'expo-router';

export default function IssueBookPage() {
  const router = useRouter();
  const [selectedBook, setSelectedBook] = useState('');
  const [selectedMember, setSelectedMember] = useState('');
  const [dueDate, setDueDate] = useState('');

  const availableBooks = [
    { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', isbn: '978-0-7432-7356-5' },
    { id: 3, title: 'To Kill a Mockingbird', author: 'Harper Lee', isbn: '978-0-06-112008-4' },
    { id: 4, title: 'Pride and Prejudice', author: 'Jane Austen', isbn: '978-0-14-143951-8' },
  ];

  const activeMembers = [
    { id: 1, name: 'John Doe', membershipId: 'LIB001' },
    { id: 2, name: 'Jane Smith', membershipId: 'LIB002' },
    { id: 4, name: 'Alice Brown', membershipId: 'LIB004' },
  ];

  const recentIssues = [
    { id: 1, bookTitle: 'The Great Gatsby', memberName: 'John Doe', issueDate: '2025-08-25', dueDate: '2025-09-08', status: 'Active' },
    { id: 2, bookTitle: '1984', memberName: 'Jane Smith', issueDate: '2025-08-20', dueDate: '2025-09-03', status: 'Overdue' },
    { id: 3, bookTitle: 'Harry Potter', memberName: 'Alice Brown', issueDate: '2025-08-28', dueDate: '2025-09-11', status: 'Active' },
  ];

  const handleIssueBook = () => {
    if (!selectedBook || !selectedMember || !dueDate) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }
    Alert.alert('Success', 'Book issued successfully!');
    setSelectedBook('');
    setSelectedMember('');
    setDueDate('');
  };

  const getStatusColor = (status) => {
    switch(status) {
      case 'Active': return 'bg-green-100 text-green-800';
      case 'Overdue': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <ScrollView className="flex-1 bg-gray-50">
      <View className="bg-blue-600 pt-12 pb-6 px-6">
        <View className="flex-row justify-between items-center">
          <TouchableOpacity
            onPress={() => router.back()}
            className="bg-blue-700 px-3 py-2 rounded-lg"
          >
            <Text className="text-white">← Back</Text>
          </TouchableOpacity>
          <Text className="text-white text-xl font-bold">Issue Books</Text>
          <View className="w-16" />
        </View>
      </View>

      <View className="p-6">
        {/* Issue Book Form */}
        <View className="bg-white rounded-xl p-6 shadow-sm mb-6">
          <Text className="text-xl font-semibold text-gray-800 mb-4">Issue New Book</Text>
          
          <View className="mb-4">
            <Text className="text-gray-700 font-medium mb-2">Select Book</Text>
            <View className="border border-gray-300 rounded-lg">
              {availableBooks.map((book) => (
                <TouchableOpacity
                  key={book.id}
                  onPress={() => setSelectedBook(book.title)}
                  className={`p-3 border-b border-gray-200 ${selectedBook === book.title ? 'bg-blue-50' : ''}`}
                >
                  <Text className="font-medium text-gray-800">{book.title}</Text>
                  <Text className="text-gray-600 text-sm">by {book.author}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          <View className="mb-4">
            <Text className="text-gray-700 font-medium mb-2">Select Member</Text>
            <View className="border border-gray-300 rounded-lg">
              {activeMembers.map((member) => (
                <TouchableOpacity
                  key={member.id}
                  onPress={() => setSelectedMember(member.name)}
                  className={`p-3 border-b border-gray-200 ${selectedMember === member.name ? 'bg-blue-50' : ''}`}
                >
                  <Text className="font-medium text-gray-800">{member.name}</Text>
                  <Text className="text-gray-600 text-sm">ID: {member.membershipId}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          <View className="mb-6">
            <Text className="text-gray-700 font-medium mb-2">Due Date</Text>
            <TextInput
              value={dueDate}
              onChangeText={setDueDate}
              placeholder="YYYY-MM-DD"
              className="border border-gray-300 rounded-lg px-4 py-3 text-gray-800 bg-gray-50"
            />
          </View>

          <TouchableOpacity
            onPress={handleIssueBook}
            className="bg-blue-600 py-4 rounded-lg"
          >
            <Text className="text-white text-lg font-semibold text-center">Issue Book</Text>
          </TouchableOpacity>
        </View>

        {/* Recent Issues */}
        <View className="bg-white rounded-xl p-6 shadow-sm">
          <Text className="text-xl font-semibold text-gray-800 mb-4">Recent Issues</Text>
          
          {recentIssues.map((issue) => (
            <View key={issue.id} className="border-b border-gray-200 pb-4 mb-4 last:border-b-0 last:mb-0">
              <View className="flex-row justify-between items-start mb-2">
                <View className="flex-1">
                  <Text className="font-semibold text-gray-800">{issue.bookTitle}</Text>
                  <Text className="text-gray-600">Issued to: {issue.memberName}</Text>
                  <Text className="text-gray-500 text-sm">Issue Date: {issue.issueDate}</Text>
                  <Text className="text-gray-500 text-sm">Due Date: {issue.dueDate}</Text>
                </View>
                <View className={`px-3 py-1 rounded-full ${getStatusColor(issue.status)}`}>
                  <Text className="text-sm font-medium">{issue.status}</Text>
                </View>
              </View>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}
