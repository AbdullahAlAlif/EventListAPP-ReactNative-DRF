import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import QR from '../screens/QR';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

export const HomeTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: { backgroundColor: '#1b7dd3' },
        tabBarActiveTintColor: 'rgb(255, 157, 0)',
        tabBarInactiveTintColor: '#433c3c',
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'HomeTabs') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'QR') {
            iconName = focused ? 'qr-code' : 'qr-code-outline';
          }

          return <Ionicons name={iconName} size={focused ? 35 : size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="HomeTabs" component={HomeScreen} />
      <Tab.Screen name="QR" component={QR} />
      
    </Tab.Navigator>
  );
};