import { useNavigation } from "@react-navigation/native";
import { Button, View, Text, StyleSheet} from "react-native";


const ProfilesScreen = () => {
  const navigation = useNavigation();   
    return (
        <View style={styles.screenContainer}>
            <Text>Profiles Screen</Text>
            <Button
                title="Go to Profile Detail"
                onPress={() => navigation.navigate('ProfileDetail', { profileId: 1 })}
            />
        </View>
    )
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffe6b868',
  },
});

export default ProfilesScreen;