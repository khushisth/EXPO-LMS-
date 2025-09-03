import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, SafeAreaView, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
 
export default function DashboardPage() {
  const router = useRouter();
 
  const dashboardItems = [
    {
      title: 'Manage Books',
      description: 'Add, edit, or remove books from library',
      color: '#3b82f6',
      route: '/books'
    },
    {
      title: 'Manage Members',
      description: 'Add, edit, or remove library members',
      color: '#10b981',
      route: '/members'
    },
    {
      title: 'Issue Books',
      description: 'Issue books to members',
      color: '#f59e0b',
      route: '/issue-books'
    },
    {
      title: 'Return Books',
      description: 'Process book returns',
      color: '#8b5cf6',
      route: '/return-books'
    },
  ];
 
  const handleLogout = () => {
    router.push('/');
  };
 
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Library Management</Text>
          <Text style={styles.headerSubtitle}>Dashboard</Text>
        </View>
        
        <View style={styles.content}>
          <Text style={styles.sectionTitle}>
            Quick Actions
          </Text>
          
          <View style={styles.itemsContainer}>
            {dashboardItems.map((item, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => router.push(item.route)}
                style={styles.dashboardItem}
                activeOpacity={0.8}
              >
                <View style={styles.itemContent}>
                  <View style={[styles.iconContainer, { backgroundColor: item.color }]}>
                    <Text style={styles.iconText}>
                      {item.title.charAt(0)}
                    </Text>
                  </View>
                  <View style={styles.textContainer}>
                    <Text style={styles.itemTitle}>
                      {item.title}
                    </Text>
                    <Text style={styles.itemDescription}>
                      {item.description}
                    </Text>
                  </View>
                  <Text style={styles.arrow}>›</Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
          
          <TouchableOpacity
            onPress={handleLogout}
            style={styles.logoutButton}
            activeOpacity={0.8}
          >
            <Text style={styles.logoutButtonText}>
              Logout
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9fafb',
  },
  scrollView: {
    flex: 1,
  },
  header: {
    backgroundColor: '#2563eb',
    paddingHorizontal: 24,
    paddingVertical: 32,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
  },
  headerTitle: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  headerSubtitle: {
    color: '#bfdbfe',
    marginTop: 4,
    fontSize: 16,
  },
  content: {
    paddingHorizontal: 24,
    paddingVertical: 24,
  },
  sectionTitle: {
    color: '#1f2937',
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 16,
  },
  itemsContainer: {
    gap: 16,
  },
  dashboardItem: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
    borderWidth: 1,
    borderColor: '#f3f4f6',
    marginBottom: 16,
  },
  itemContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  iconText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  textContainer: {
    flex: 1,
  },
  itemTitle: {
    color: '#1f2937',
    fontSize: 18,
    fontWeight: '600',
  },
  itemDescription: {
    color: '#6b7280',
    fontSize: 14,
    marginTop: 4,
  },
  arrow: {
    color: '#9ca3af',
    fontSize: 20,
  },
  logoutButton: {
    backgroundColor: '#ef4444',
    paddingVertical: 16,
    borderRadius: 12,
    marginTop: 32,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  logoutButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
  },
});
