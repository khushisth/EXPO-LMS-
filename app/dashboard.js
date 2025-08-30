import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, SafeAreaView, StatusBar } from 'react-native';
import { useRouter } from 'expo-router';
 
export default function DashboardPage() {
  const router = useRouter();
 
  const handleLogout = () => {
    router.push('/');
  };

  const handleMenuPress = (route) => {
    if (route) {
      router.push(route);
    }
  };
 
  const menuItems = [
    { title: 'Book Management', icon: '📚', route: '/books', color: '#3b82f6' },
    { title: 'Member Management', icon: '👥', route: '/members', color: '#10b981' },
    { title: 'Issue Books', icon: '📤', route: '/issue-books', color: '#f59e0b' },
    { title: 'Return Books', icon: '📥', route: '/return-books', color: '#ef4444' },
    { title: 'Reports', icon: '📊', route: null, color: '#8b5cf6' },
    { title: 'Settings', icon: '⚙️', route: null, color: '#6b7280' },
  ];

  const recentActivities = [
    { id: 1, text: 'Book "The Great Gatsby" issued to John Doe', time: '2 min ago', color: '#10b981' },
    { id: 2, text: 'New member registration', time: '1 hour ago', color: '#3b82f6' },
    { id: 3, text: 'Book "1984" returned by Jane Smith', time: '3 hours ago', color: '#f59e0b' },
  ];
 
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#f8fafc'}}>
      <StatusBar barStyle="light-content" backgroundColor="#2563eb" />
      
      {/* Header */}
      <View style={{
        backgroundColor: '#2563eb',
        paddingTop: 16,
        paddingBottom: 32,
        paddingHorizontal: 24
      }}>
        <View style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <View>
            <Text style={{
              color: 'white',
              fontSize: 28,
              fontWeight: 'bold'
            }}>
              Welcome to LMS
            </Text>
            <Text style={{
              color: '#93c5fd',
              marginTop: 4,
              fontSize: 16
            }}>
              Librarian Dashboard
            </Text>
          </View>
          
          <TouchableOpacity
            onPress={handleLogout}
            style={{
              backgroundColor: '#1d4ed8',
              paddingHorizontal: 16,
              paddingVertical: 8,
              borderRadius: 8
            }}
            activeOpacity={0.8}
          >
            <Text style={{color: 'white', fontWeight: '500'}}>Logout</Text>
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
        <View style={{padding: 24}}>
          {/* Quick Actions */}
          <Text style={{
            fontSize: 20,
            fontWeight: '600',
            color: '#1f2937',
            marginBottom: 24
          }}>
            Quick Actions
          </Text>
          
          <View style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-between'
          }}>
            {menuItems.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={{
                  backgroundColor: 'white',
                  padding: 20,
                  borderRadius: 16,
                  marginBottom: 16,
                  width: '48%',
                  alignItems: 'center',
                  shadowColor: '#000',
                  shadowOffset: { width: 0, height: 2 },
                  shadowOpacity: 0.1,
                  shadowRadius: 8,
                  elevation: 4,
                  borderWidth: 1,
                  borderColor: '#f3f4f6'
                }}
                activeOpacity={0.7}
                onPress={() => handleMenuPress(item.route)}
              >
                <View style={{
                  backgroundColor: item.color,
                  padding: 12,
                  borderRadius: 12,
                  marginBottom: 12
                }}>
                  <Text style={{fontSize: 24}}>{item.icon}</Text>
                </View>
                
                <Text style={{
                  color: '#1f2937',
                  fontWeight: '500',
                  textAlign: 'center',
                  fontSize: 14
                }}>
                  {item.title}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          {/* Recent Activity */}
          <View style={{
            backgroundColor: 'white',
            borderRadius: 16,
            padding: 24,
            marginTop: 16,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.1,
            shadowRadius: 8,
            elevation: 4
          }}>
            <Text style={{
              fontSize: 18,
              fontWeight: '600',
              color: '#1f2937',
              marginBottom: 16
            }}>
              Recent Activity
            </Text>
            
            <View>
              {recentActivities.map((activity) => (
                <View key={activity.id} style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  paddingVertical: 12,
                  borderBottomWidth: activity.id !== recentActivities.length ? 1 : 0,
                  borderBottomColor: '#f3f4f6'
                }}>
                  <View style={{
                    width: 8,
                    height: 8,
                    backgroundColor: activity.color,
                    borderRadius: 4,
                    marginRight: 12
                  }} />
                  
                  <View style={{flex: 1}}>
                    <Text style={{
                      color: '#374151',
                      fontSize: 14,
                      lineHeight: 20
                    }}>
                      {activity.text}
                    </Text>
                  </View>
                  
                  <Text style={{
                    color: '#9ca3af',
                    fontSize: 12
                  }}>
                    {activity.time}
                  </Text>
                </View>
              ))}
            </View>
          </View>

          {/* Statistics Cards */}
          <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 24
          }}>
            <View style={{
              backgroundColor: 'white',
              padding: 20,
              borderRadius: 16,
              width: '48%',
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.1,
              shadowRadius: 8,
              elevation: 4
            }}>
              <Text style={{fontSize: 24, marginBottom: 8}}>📚</Text>
              <Text style={{fontSize: 24, fontWeight: 'bold', color: '#1f2937'}}>1,247</Text>
              <Text style={{color: '#6b7280', fontSize: 14}}>Total Books</Text>
            </View>

            <View style={{
              backgroundColor: 'white',
              padding: 20,
              borderRadius: 16,
              width: '48%',
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.1,
              shadowRadius: 8,
              elevation: 4
            }}>
              <Text style={{fontSize: 24, marginBottom: 8}}>👥</Text>
              <Text style={{fontSize: 24, fontWeight: 'bold', color: '#1f2937'}}>382</Text>
              <Text style={{color: '#6b7280', fontSize: 14}}>Active Members</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
