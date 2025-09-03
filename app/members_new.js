import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, SafeAreaView, TextInput, Alert, StyleSheet } from 'react-native';
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
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Text style={styles.backButton}>← Back</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Manage Members</Text>
        <TouchableOpacity onPress={() => setShowAddForm(!showAddForm)}>
          <Text style={styles.addButton}>+ Add</Text>
        </TouchableOpacity>
      </View>
 
      {showAddForm && (
        <View style={styles.addForm}>
          <Text style={styles.formTitle}>Add New Member</Text>
          <TextInput
            value={newMember.name}
            onChangeText={(text) => setNewMember({...newMember, name: text})}
            placeholder="Full Name"
            style={styles.input}
            placeholderTextColor="#9ca3af"
          />
          <TextInput
            value={newMember.email}
            onChangeText={(text) => setNewMember({...newMember, email: text})}
            placeholder="Email"
            keyboardType="email-address"
            autoCapitalize="none"
            style={styles.input}
            placeholderTextColor="#9ca3af"
          />
          <TextInput
            value={newMember.phone}
            onChangeText={(text) => setNewMember({...newMember, phone: text})}
            placeholder="Phone Number"
            keyboardType="phone-pad"
            style={styles.input}
            placeholderTextColor="#9ca3af"
          />
          <View style={styles.formButtons}>
            <TouchableOpacity
              onPress={handleAddMember}
              style={[styles.button, styles.addMemberButton]}
            >
              <Text style={styles.buttonText}>Add Member</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setShowAddForm(false)}
              style={[styles.button, styles.cancelButton]}
            >
              <Text style={styles.cancelButtonText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
 
      <ScrollView style={styles.scrollView}>
        {members.map((member) => (
          <View key={member.id} style={styles.memberCard}>
            <View style={styles.memberHeader}>
              <View style={styles.memberInfo}>
                <Text style={styles.memberName}>{member.name}</Text>
                <Text style={styles.memberEmail}>{member.email}</Text>
                <Text style={styles.memberPhone}>{member.phone}</Text>
                <Text style={styles.membershipDate}>
                  Member since: {member.membershipDate}
                </Text>
              </View>
              <TouchableOpacity
                onPress={() => handleDeleteMember(member.id)}
                style={styles.deleteButton}
              >
                <Text style={styles.deleteIcon}>🗑️</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9fafb',
  },
  header: {
    backgroundColor: '#16a34a',
    paddingHorizontal: 24,
    paddingVertical: 16,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  backButton: {
    color: 'white',
    fontSize: 18,
  },
  headerTitle: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  addButton: {
    color: 'white',
    fontSize: 18,
  },
  addForm: {
    backgroundColor: 'white',
    marginHorizontal: 16,
    marginTop: 16,
    padding: 16,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  formTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1f2937',
    marginBottom: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#d1d5db',
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginBottom: 12,
    backgroundColor: '#f9fafb',
    fontSize: 16,
    color: '#1f2937',
  },
  formButtons: {
    flexDirection: 'row',
    gap: 12,
  },
  button: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  addMemberButton: {
    backgroundColor: '#16a34a',
  },
  cancelButton: {
    backgroundColor: '#d1d5db',
  },
  buttonText: {
    color: 'white',
    fontWeight: '600',
  },
  cancelButtonText: {
    color: '#374151',
    fontWeight: '600',
  },
  scrollView: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  memberCard: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  memberHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  memberInfo: {
    flex: 1,
  },
  memberName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1f2937',
  },
  memberEmail: {
    color: '#6b7280',
    fontSize: 14,
    marginTop: 2,
  },
  memberPhone: {
    color: '#9ca3af',
    fontSize: 14,
    marginTop: 2,
  },
  membershipDate: {
    color: '#d1d5db',
    fontSize: 12,
    marginTop: 4,
  },
  deleteButton: {
    padding: 8,
  },
  deleteIcon: {
    fontSize: 18,
  },
});
