import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, TextInput, Alert } from 'react-native';
import { useRouter } from 'expo-router';

export default function ReturnBookPage() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');

  const issuedBooks = [
    { 
      id: 1, 
      bookTitle: 'The Great Gatsby', 
      memberName: 'John Doe', 
      membershipId: 'LIB001',
      issueDate: '2025-08-15', 
      dueDate: '2025-08-29', 
      status: 'Overdue',
      fine: 5.00 
    },
    { 
      id: 2, 
      bookTitle: '1984', 
      memberName: 'Jane Smith', 
      membershipId: 'LIB002',
      issueDate: '2025-08-20', 
      dueDate: '2025-09-03', 
      status: 'Active',
      fine: 0 
    },
    { 
      id: 3, 
      bookTitle: 'Harry Potter and the Sorcerer\'s Stone', 
      memberName: 'Alice Brown', 
      membershipId: 'LIB004',
      issueDate: '2025-08-25', 
      dueDate: '2025-09-08', 
      status: 'Active',
      fine: 0 
    },
    { 
      id: 4, 
      bookTitle: 'Pride and Prejudice', 
      memberName: 'Bob Johnson', 
      membershipId: 'LIB003',
      issueDate: '2025-08-10', 
      dueDate: '2025-08-24', 
      status: 'Overdue',
      fine: 15.00 
    },
  ];

  const recentReturns = [
    { id: 1, bookTitle: 'To Kill a Mockingbird', memberName: 'Charlie Wilson', returnDate: '2025-08-28', fine: 0 },
    { id: 2, bookTitle: 'The Catcher in the Rye', memberName: 'David Lee', returnDate: '2025-08-27', fine: 2.50 },
    { id: 3, bookTitle: 'Lord of the Flies', memberName: 'Emma Davis', returnDate: '2025-08-26', fine: 0 },
  ];

  const filteredBooks = issuedBooks.filter(book => 
    book.bookTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
    book.memberName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    book.membershipId.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleReturnBook = (bookId, fine) => {
    const message = fine > 0 
      ? `Book returned successfully! Fine amount: $${fine.toFixed(2)}`
      : 'Book returned successfully!';
    Alert.alert('Return Successful', message);
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
        <View className="flex-row justify-between items-center mb-4">
          <TouchableOpacity
            onPress={() => router.back()}
            className="bg-blue-700 px-3 py-2 rounded-lg"
          >
            <Text className="text-white">← Back</Text>
          </TouchableOpacity>
          <Text className="text-white text-xl font-bold">Return Books</Text>
          <View className="w-16" />
        </View>
        
        <TextInput
          value={searchQuery}
          onChangeText={setSearchQuery}
          placeholder="Search by book title, member name, or ID..."
          placeholderTextColor="#93c5fd"
          className="bg-blue-700 text-white px-4 py-3 rounded-lg"
        />
      </View>

      <View className="p-6">
        {/* Currently Issued Books */}
        <View className="bg-white rounded-xl p-6 shadow-sm mb-6">
          <Text className="text-xl font-semibold text-gray-800 mb-4">Currently Issued Books</Text>
          
          {filteredBooks.map((book) => (
            <View key={book.id} className="border-b border-gray-200 pb-4 mb-4 last:border-b-0 last:mb-0">
              <View className="flex-row justify-between items-start mb-2">
                <View className="flex-1">
                  <Text className="font-semibold text-gray-800 mb-1">{book.bookTitle}</Text>
                  <Text className="text-gray-600">Member: {book.memberName} ({book.membershipId})</Text>
                  <Text className="text-gray-500 text-sm">Issue Date: {book.issueDate}</Text>
                  <Text className="text-gray-500 text-sm">Due Date: {book.dueDate}</Text>
                  {book.fine > 0 && (
                    <Text className="text-red-600 font-medium text-sm">Fine: ${book.fine.toFixed(2)}</Text>
                  )}
                </View>
                <View className="items-end">
                  <View className={`px-3 py-1 rounded-full mb-2 ${getStatusColor(book.status)}`}>
                    <Text className="text-sm font-medium">{book.status}</Text>
                  </View>
                  <TouchableOpacity
                    onPress={() => handleReturnBook(book.id, book.fine)}
                    className="bg-green-600 px-4 py-2 rounded-lg"
                  >
                    <Text className="text-white font-medium">Return</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          ))}
        </View>

        {/* Recent Returns */}
        <View className="bg-white rounded-xl p-6 shadow-sm">
          <Text className="text-xl font-semibold text-gray-800 mb-4">Recent Returns</Text>
          
          {recentReturns.map((return_item) => (
            <View key={return_item.id} className="border-b border-gray-200 pb-4 mb-4 last:border-b-0 last:mb-0">
              <View className="flex-row justify-between items-center">
                <View className="flex-1">
                  <Text className="font-semibold text-gray-800">{return_item.bookTitle}</Text>
                  <Text className="text-gray-600">Returned by: {return_item.memberName}</Text>
                  <Text className="text-gray-500 text-sm">Return Date: {return_item.returnDate}</Text>
                </View>
                <View className="items-end">
                  <View className="bg-gray-100 px-3 py-1 rounded-full">
                    <Text className="text-sm font-medium text-gray-800">Returned</Text>
                  </View>
                  {return_item.fine > 0 && (
                    <Text className="text-red-600 font-medium text-sm mt-1">
                      Fine: ${return_item.fine.toFixed(2)}
                    </Text>
                  )}
                </View>
              </View>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}
