import { createDrawerNavigator } from '@react-navigation/drawer';
//import HomeScreen from '../screens/HomeScreen';
import { HomeStack } from './Stack';
import { ProfileStack } from './Stack';
import { AboutStack } from './Stack';
import { View, StyleSheet, Image } from 'react-native';
import { DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';

const Drawer = createDrawerNavigator();
export const HomeDrawer = () => {
return (
    <Drawer.Navigator 
        drawerContent={(props) => (
            <View style={styles.drawerContainer}>
                <View style={styles.logoContainer}>
                    <Image 
                        source={require('../assets/logo.png')} 
                        style={styles.logo} 
                    />
                </View>
                <DrawerItemList {...props} />
            </View>
        )}
        screenOptions={{ 
            headerShown: false,
            drawerStyle: styles.drawerStyle,
            drawerLabelStyle: styles.drawerLabel,
        }}
    >
        <Drawer.Screen 
            name="HomeStack" 
            component={HomeStack} 
            options={{ title: 'Home' }} 
        />
        <Drawer.Screen 
            name="ProfileStack" 
            component={ProfileStack} 
            options={{ title: 'Profiles' }} 
        />

        <Drawer.Screen
        name="About Us"
        component={AboutStack}
        options={{
            drawerIcon: ({ color, size }) => (
            <Ionicons name="information-circle-outline" size={size} color={color} />
            ),
        }}
        />
    </Drawer.Navigator>
);
}

const styles = StyleSheet.create({
    drawerContainer: {
        flex: 1,
        paddingTop: 40,
        backgroundColor: '#efe3bddd',
        backdropFilter: 'blur(100px)'

    },

    logoContainer: {
        alignItems: 'center',
        marginVertical: 50,
       
    },
    logo: {
        width: 100,
        height: 100,
        resizeMode: 'contain',
        borderRadius: 50,
        marginBottom: 10,
    },
    drawerStyle: {
        backgroundColor: '#fff',
        width: 240,
    },
    drawerLabel: {
        fontSize: 16,
        fontWeight: 'bold',
    },});