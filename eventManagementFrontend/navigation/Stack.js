import { createStackNavigator } from '@react-navigation/stack';
//import HomeScreen from '../screens/HomeScreen';
import EventDetailsScreen from '../screens/EventDetailsScreen';
import { navOptions } from './options';
import { useNavigation } from '@react-navigation/native';
import ProfilesScreen from '../screens/profile/ProfilesScreen';
import ProfileDetailScreen from '../screens/profile/ProfileDetailScreen';
import About from '../screens/About';
import { HomeTabs } from './Tabs';
import NewEventScreen from '../screens/NewEventScreen';

const Stack = createStackNavigator();

export const HomeStack = () => {
  const navigation = useNavigation();
  return (
    <Stack.Navigator screenOptions={() => navOptions(navigation)}>
        <Stack.Screen name="Home" component={HomeTabs} />
        <Stack.Screen name="EventDetails" component={EventDetailsScreen} />
        <Stack.Screen name="NewEvent" component={NewEventScreen} />
    </Stack.Navigator>
  );
}


export const ProfileStack = () => {
  const navigation = useNavigation();
  return (
    <Stack.Navigator screenOptions={() => navOptions(navigation)}>
        <Stack.Screen name="Profiles" component={ProfilesScreen} />
        <Stack.Screen name="ProfileDetail" component={ProfileDetailScreen} />
    </Stack.Navigator>
  );
}

export const AboutStack = () => {
  const navigation = useNavigation();
  return (
    <Stack.Navigator screenOptions={() => navOptions(navigation)}>
        <Stack.Screen name="About" component={About} />
    </Stack.Navigator>
  );
}