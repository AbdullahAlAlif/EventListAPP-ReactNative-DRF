import { View, Text, StyleSheet } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native';
import { useLayoutEffect } from 'react';
import { HeaderBackButton } from '@react-navigation/elements';

const ProfilesScreen = () => {
  const route = useRoute();
  const navigation = useNavigation()
  const { profileId } = route.params;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle:"Profile: "+ profileId,
      headerLeft: () => (
        <HeaderBackButton  onPress={() => navigation.goBack()} />
      ),
    });
  });
  return (
    <View style={styles.screenContainer}>
      <Text style={{fontSize: 20}}>Profile Details Screen for {profileId}</Text>
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
    
})

export default ProfilesScreen