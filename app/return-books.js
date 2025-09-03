import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, SafeAreaView, Alert } from 'react-native';
import { useRouter } from 'expo-router';
 
export default function ReturnBooksPage() {
  const router = useRouter();
  const [issuedBooks, setIssuedBooks] = useState([
    { id: 1, bookTitle: '1984', memberName: 'John Doe', issueDate: '2024-01-15', dueDate: '2024-02-15', isOverdue: false },
    { id: 2, bookTitle: 'Pride and Prejudice', memberName: 'Jane Smith', issueDate: '2024-01-20', dueDate: '2024-02-20', isOverdue: true },
    { id: 3, bookTitle: 'To Kill a Mockingbird', memberName: 'Bob Johnson', issueDate: '2024-02-01', dueDate: '2024-03-01', isOverdue: false },
  ]);
 
  const [returnedBooks, setReturnedBooks] = useState([]);
 
  const handleReturnBook = (bookId) => {
    const book = issuedBooks.find(b => b.id === bookId);
    if (!book) return;
 
    const returnDate = new Date().toISOString().split('T')[0];
    const returnedBook = {
      ...book,
      returnDate,
      fine: book.isOverdue ? 50 : 0 // $50 fine for overdue books
    };
 
    setReturnedBooks([...returnedBooks, returnedBook]);
    setIssuedBooks(issuedBooks.filter(b => b.id !== bookId));
    
    Alert.alert(
      'Book Returned',
      book.isOverdue 
        ? `Book returned successfully! Fine: $${returnedBook.fine}` 
        : 'Book returned successfully!'
    );
  };
 
  const getDaysOverdue = (dueDate) => {
    const today = new Date();
    const due = new Date(dueDate);
    const diffTime = today - due;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays > 0 ? diffDays : 0;
  };
 
  return (
<SafeAreaView className="flex-1 bg-gray-50">
<View className="bg-purple-600 px-6 py-4 rounded-b-3xl flex-row items-center justify-between">
<TouchableOpacity onPress={() => router.back()}>
<Text className="text-white text-lg">← Back</Text>
</TouchableOpacity>
<Text className="text-white text-xl font-bold">Return Books</Text>
<View className="w-12" />
</View>
 
<ScrollView className="flex-1 px-4 pt-4">
<View className="bg-white rounded-xl p-4 mb-4 shadow-sm">
<Text className="text-lg font-semibold text-gray-800 mb-4">Books to Return</Text>
          {issuedBooks.length > 0 ? (
            issuedBooks.map((book) => (
<View key={book.id} className="border border-gray-200 rounded-lg p-4 mb-3">
<View className="flex-row justify-between items-start mb-2">
<View className="flex-1">
<Text className="text-gray-800 font-semibold text-lg">{book.bookTitle}</Text>
<Text className="text-gray-600">Issued to: {book.memberName}</Text>
<Text className="text-gray-500 text-sm">Issue Date: {book.issueDate}</Text>
<Text className="text-gray-500 text-sm">Due Date: {book.dueDate}</Text>
                  {book.isOverdue && (
<Text className="text-red-500 text-sm font-medium mt-1">
                      Overdue by {getDaysOverdue(book.dueDate)} days
</Text>
                  )}
</View>
                  {book.isOverdue && (
<View className="bg-red-100 px-2 py-1 rounded">
<Text className="text-red-800 text-xs font-medium">OVERDUE</Text>
</View>
                  )}
</View>
<TouchableOpacity
                  onPress={() => handleReturnBook(book.id)}
                  className="bg-purple-600 py-3 rounded-lg mt-2"
>
<Text className="text-white text-center font-semibold">Return Book</Text>
</TouchableOpacity>
</View>
            ))
          ) : (
<Text className="text-gray-500 text-center py-8">No books currently issued</Text>
          )}
</View>
 
        {returnedBooks.length > 0 && (
<View className="bg-white rounded-xl p-4 shadow-sm">
<Text className="text-lg font-semibold text-gray-800 mb-4">Recently Returned</Text>
            {returnedBooks.map((book) => (
<View key={`returned-${book.id}`} className="border-b border-gray-200 pb-3 mb-3">
<Text className="text-gray-800 font-semibold">{book.bookTitle}</Text>
<Text className="text-gray-600">Returned by: {book.memberName}</Text>
<Text className="text-gray-500 text-sm">Return Date: {book.returnDate}</Text>
                {book.fine > 0 && (
<Text className="text-red-500 text-sm font-medium">Fine: ${book.fine}</Text>
                )}
</View>
            ))}
</View>
        )}
</ScrollView>
</SafeAreaView>
  );
}
