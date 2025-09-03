import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, SafeAreaView, TextInput, Alert } from 'react-native';
import { useRouter } from 'expo-router';
 
export default function IssueBooksPage() {
  const router = useRouter();
  const [selectedMember, setSelectedMember] = useState('');
  const [selectedBook, setSelectedBook] = useState('');
  const [issuedBooks, setIssuedBooks] = useState([
    { id: 1, bookTitle: '1984', memberName: 'John Doe', issueDate: '2024-01-15', dueDate: '2024-02-15' },
    { id: 2, bookTitle: 'Pride and Prejudice', memberName: 'Jane Smith', issueDate: '2024-01-20', dueDate: '2024-02-20' },
  ]);
 
  const availableBooks = [
    { id: 1, title: 'To Kill a Mockingbird' },
    { id: 3, title: 'The Great Gatsby' },
    { id: 4, title: 'Lord of the Flies' },
  ];
 
  const members = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Smith' },
    { id: 3, name: 'Bob Johnson' },
  ];
 
  const handleIssueBook = () => {
    if (!selectedMember || !selectedBook) {
      Alert.alert('Error', 'Please select both member and book');
      return;
    }
 
    const issueDate = new Date().toISOString().split('T')[0];
    const dueDate = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0];
 
    const newIssue = {
      id: issuedBooks.length + 1,
      bookTitle: availableBooks.find(book => book.id.toString() === selectedBook)?.title,
      memberName: members.find(member => member.id.toString() === selectedMember)?.name,
      issueDate,
      dueDate
    };
 
    setIssuedBooks([...issuedBooks, newIssue]);
    setSelectedMember('');
    setSelectedBook('');
    Alert.alert('Success', 'Book issued successfully');
  };
 
  return (
<SafeAreaView className="flex-1 bg-gray-50">
<View className="bg-orange-600 px-6 py-4 rounded-b-3xl flex-row items-center justify-between">
<TouchableOpacity onPress={() => router.back()}>
<Text className="text-white text-lg">← Back</Text>
</TouchableOpacity>
<Text className="text-white text-xl font-bold">Issue Books</Text>
<View className="w-12" />
</View>
 
<ScrollView className="flex-1 px-4 pt-4">
<View className="bg-white rounded-xl p-4 mb-4 shadow-sm">
<Text className="text-lg font-semibold text-gray-800 mb-4">Issue New Book</Text>
          
<Text className="text-gray-700 font-medium mb-2">Select Member</Text>
<View className="border border-gray-300 rounded-lg mb-4 bg-gray-50">
            {members.map((member) => (
<TouchableOpacity
                key={member.id}
                onPress={() => setSelectedMember(member.id.toString())}
                className={`p-3 border-b border-gray-200 ${selectedMember === member.id.toString() ? 'bg-orange-100' : ''}`}
>
<Text className={`${selectedMember === member.id.toString() ? 'text-orange-800 font-semibold' : 'text-gray-800'}`}>
                  {member.name}
</Text>
</TouchableOpacity>
            ))}
</View>
 
<Text className="text-gray-700 font-medium mb-2">Select Book</Text>
<View className="border border-gray-300 rounded-lg mb-4 bg-gray-50">
            {availableBooks.map((book) => (
<TouchableOpacity
                key={book.id}
                onPress={() => setSelectedBook(book.id.toString())}
                className={`p-3 border-b border-gray-200 ${selectedBook === book.id.toString() ? 'bg-orange-100' : ''}`}
>
<Text className={`${selectedBook === book.id.toString() ? 'text-orange-800 font-semibold' : 'text-gray-800'}`}>
                  {book.title}
</Text>
</TouchableOpacity>
            ))}
</View>
 
<TouchableOpacity
            onPress={handleIssueBook}
            className="bg-orange-600 py-4 rounded-lg"
>
<Text className="text-white text-center font-semibold text-lg">Issue Book</Text>
</TouchableOpacity>
</View>
 
<View className="bg-white rounded-xl p-4 shadow-sm">
<Text className="text-lg font-semibold text-gray-800 mb-4">Currently Issued Books</Text>
          {issuedBooks.map((issue) => (
<View key={issue.id} className="border-b border-gray-200 pb-3 mb-3">
<Text className="text-gray-800 font-semibold">{issue.bookTitle}</Text>
<Text className="text-gray-600">Issued to: {issue.memberName}</Text>
<Text className="text-gray-500 text-sm">Issue Date: {issue.issueDate}</Text>
<Text className="text-gray-500 text-sm">Due Date: {issue.dueDate}</Text>
</View>
          ))}
</View>
</ScrollView>
</SafeAreaView>
  );
}
