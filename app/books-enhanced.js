import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, TextInput, Alert } from 'react-native';
import { useRouter } from 'expo-router';

export default function BooksPage() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');
  
  const books = [
    { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', isbn: '978-0-7432-7356-5', status: 'Available', copies: 3 },
    { id: 2, title: '1984', author: 'George Orwell', isbn: '978-0-452-28423-4', status: 'Issued', copies: 1 },
    { id: 3, title: 'To Kill a Mockingbird', author: 'Harper Lee', isbn: '978-0-06-112008-4', status: 'Available', copies: 2 },
    { id: 4, title: 'Pride and Prejudice', author: 'Jane Austen', isbn: '978-0-14-143951-8', status: 'Available', copies: 4 },
    { id: 5, title: 'The Catcher in the Rye', author: 'J.D. Salinger', isbn: '978-0-316-76948-0', status: 'Maintenance', copies: 1 },
  ];

  const filteredBooks = books.filter(book => 
    book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    book.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
    book.isbn.includes(searchQuery)
  );

  const getStatusColor = (status) => {
    switch(status) {
      case 'Available': return 'status-available px-3 py-1 rounded-full';
      case 'Issued': return 'status-issued px-3 py-1 rounded-full';
      case 'Maintenance': return 'status-overdue px-3 py-1 rounded-full';
      default: return 'status-inactive px-3 py-1 rounded-full';
    }
  };

  const handleAddBook = () => {
    Alert.alert('Add Book', 'Add new book functionality to be implemented');
  };

  return (
    <ScrollView className="flex-1 bg-gradient-to-br from-gray-50 to-blue-50">
      <View className="header-gradient pt-12 pb-6 px-6 shadow-lg">
        <View className="flex-row justify-between items-center mb-4">
          <TouchableOpacity
            onPress={() => router.back()}
            className="bg-white/20 px-4 py-2 rounded-xl backdrop-blur-sm"
          >
            <Text className="text-white font-semibold">← Back</Text>
          </TouchableOpacity>
          <Text className="text-white text-2xl font-bold text-shadow">📚 Books</Text>
          <TouchableOpacity
            onPress={handleAddBook}
            className="btn-success px-4 py-2"
          >
            <Text className="text-white font-semibold">+ Add</Text>
          </TouchableOpacity>
        </View>
        
        <TextInput
          value={searchQuery}
          onChangeText={setSearchQuery}
          placeholder="Search books by title, author, or ISBN..."
          placeholderTextColor="#93c5fd"
          className="bg-white/20 text-white px-4 py-3 rounded-xl backdrop-blur-sm"
        />
      </View>

      <View className="p-6">
        <View className="bg-white rounded-xl p-4 shadow-lg mb-6">
          <Text className="text-lg font-bold text-gray-800">
            Total Books: {filteredBooks.length}
          </Text>
        </View>

        {filteredBooks.map((book) => (
          <View key={book.id} className="card p-6 mb-4 shadow-lg card-hover">
            <View className="flex-row justify-between items-start mb-4">
              <View className="flex-1">
                <Text className="text-xl font-bold text-gray-800 mb-2">
                  {book.title}
                </Text>
                <Text className="text-gray-600 mb-2 text-base">📝 by {book.author}</Text>
                <Text className="text-gray-500 text-sm mb-2">📖 ISBN: {book.isbn}</Text>
                <Text className="text-gray-600 font-medium">📚 Copies: {book.copies}</Text>
              </View>
              <View className={getStatusColor(book.status)}>
                <Text className="text-sm font-bold">{book.status}</Text>
              </View>
            </View>
            
            <View className="flex-row justify-end space-x-3 mt-4">
              <TouchableOpacity className="btn-secondary px-4 py-2">
                <Text className="text-gray-700 font-semibold">Edit</Text>
              </TouchableOpacity>
              <TouchableOpacity className="btn-success px-4 py-2">
                <Text className="text-white font-semibold">Issue</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}
