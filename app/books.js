import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, TextInput, Alert, SafeAreaView, StatusBar } from 'react-native';
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
      case 'Available': return '#10b981';
      case 'Issued': return '#ef4444';
      case 'Maintenance': return '#f59e0b';
      default: return '#6b7280';
    }
  };

  const getStatusBgColor = (status) => {
    switch(status) {
      case 'Available': return '#d1fae5';
      case 'Issued': return '#fee2e2';
      case 'Maintenance': return '#fef3c7';
      default: return '#f3f4f6';
    }
  };

  const handleAddBook = () => {
    Alert.alert('Add Book', 'Add new book functionality to be implemented');
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#f8fafc'}}>
      <StatusBar barStyle="light-content" backgroundColor="#2563eb" />
      
      {/* Header */}
      <View style={{
        backgroundColor: '#2563eb',
        paddingTop: 16,
        paddingBottom: 24,
        paddingHorizontal: 24
      }}>
        <View style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: 16
        }}>
          <TouchableOpacity
            onPress={() => router.back()}
            style={{
              backgroundColor: '#1d4ed8',
              paddingHorizontal: 12,
              paddingVertical: 8,
              borderRadius: 8
            }}
          >
            <Text style={{color: 'white', fontSize: 16}}>← Back</Text>
          </TouchableOpacity>
          
          <Text style={{
            color: 'white',
            fontSize: 20,
            fontWeight: 'bold'
          }}>
            Book Management
          </Text>
          
          <TouchableOpacity
            onPress={handleAddBook}
            style={{
              backgroundColor: '#10b981',
              paddingHorizontal: 12,
              paddingVertical: 8,
              borderRadius: 8
            }}
          >
            <Text style={{color: 'white', fontSize: 16}}>+ Add</Text>
          </TouchableOpacity>
        </View>
        
        <TextInput
          value={searchQuery}
          onChangeText={setSearchQuery}
          placeholder="Search books by title, author, or ISBN..."
          placeholderTextColor="#93c5fd"
          style={{
            backgroundColor: '#1d4ed8',
            color: 'white',
            paddingHorizontal: 16,
            paddingVertical: 12,
            borderRadius: 12,
            fontSize: 16
          }}
        />
      </View>

      <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
        <View style={{padding: 24}}>
          <Text style={{
            fontSize: 18,
            fontWeight: '600',
            color: '#1f2937',
            marginBottom: 16
          }}>
            Total Books: {filteredBooks.length}
          </Text>

          {filteredBooks.map((book) => (
            <View key={book.id} style={{
              backgroundColor: 'white',
              borderRadius: 16,
              padding: 20,
              marginBottom: 16,
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.1,
              shadowRadius: 8,
              elevation: 4
            }}>
              <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                marginBottom: 12
              }}>
                <View style={{flex: 1}}>
                  <Text style={{
                    fontSize: 18,
                    fontWeight: '600',
                    color: '#1f2937',
                    marginBottom: 4
                  }}>
                    {book.title}
                  </Text>
                  
                  <Text style={{
                    color: '#6b7280',
                    marginBottom: 4,
                    fontSize: 16
                  }}>
                    by {book.author}
                  </Text>
                  
                  <Text style={{
                    color: '#9ca3af',
                    fontSize: 14,
                    marginBottom: 8
                  }}>
                    ISBN: {book.isbn}
                  </Text>
                  
                  <Text style={{
                    color: '#374151',
                    fontSize: 14
                  }}>
                    Copies: {book.copies}
                  </Text>
                </View>
                
                <View style={{
                  paddingHorizontal: 12,
                  paddingVertical: 6,
                  borderRadius: 20,
                  backgroundColor: getStatusBgColor(book.status)
                }}>
                  <Text style={{
                    fontSize: 12,
                    fontWeight: '500',
                    color: getStatusColor(book.status)
                  }}>
                    {book.status}
                  </Text>
                </View>
              </View>
              
              <View style={{
                flexDirection: 'row',
                justifyContent: 'flex-end',
                gap: 12,
                marginTop: 12
              }}>
                <TouchableOpacity style={{
                  backgroundColor: '#dbeafe',
                  paddingHorizontal: 16,
                  paddingVertical: 8,
                  borderRadius: 8
                }}>
                  <Text style={{
                    color: '#2563eb',
                    fontWeight: '500'
                  }}>
                    Edit
                  </Text>
                </TouchableOpacity>
                
                <TouchableOpacity style={{
                  backgroundColor: '#dcfce7',
                  paddingHorizontal: 16,
                  paddingVertical: 8,
                  borderRadius: 8
                }}>
                  <Text style={{
                    color: '#16a34a',
                    fontWeight: '500'
                  }}>
                    Issue
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
