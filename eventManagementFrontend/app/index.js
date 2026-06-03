import 'react-native-gesture-handler';
import { StyleSheet, Text, View,Platform } from "react-native";
//import { NavigationContainer } from '@react-navigation/native';
import { HomeStack } from "../navigation/Stack";
import { HomeDrawer } from '../navigation/Drawer';

export default function App() {
  return (
      <>
        {/*<HomeStack />*/}
        <HomeDrawer />
      </>
  );
}
