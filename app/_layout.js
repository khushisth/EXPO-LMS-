import { Stack } from 'expo-router';
import '../global.css';
 
export default function RootLayout() {
  return (
<Stack screenOptions={{ headerShown: false }}>
<Stack.Screen name="index" />
<Stack.Screen name="login" />
<Stack.Screen name="dashboard" />
<Stack.Screen name="books" />
<Stack.Screen name="members" />
<Stack.Screen name="issue-books" />
<Stack.Screen name="return-books" />
</Stack>
  );
}