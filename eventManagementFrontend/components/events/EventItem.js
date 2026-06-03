import React from 'react'
import { View , Text, StyleSheet, TouchableOpacity, Image} from 'react-native'
import { useNavigation } from '@react-navigation/native';

const EventItem = ({id, title, description, date, location, qrCode}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity 
      style={styles.card} 
      onPress={()=>{
        navigation.navigate('EventDetails',{
          eventId:id, 
          eventTitle:title, 
          eventDescription:description, 
          eventDate:date, 
          eventLocation:location
        })
      }}
    >
      {/* Row container */}
      <View style={styles.row}>
        <Text style={styles.title}>{title}</Text>
        <Image source={{uri: qrCode}} style={styles.image} />
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  card: {
    padding: 20,
    margin: 10,
    backgroundColor: '#f0f0f0',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between', // pushes title left, image right
    alignItems: 'center'
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  image: {
    width: 100,
    height: 100,
    marginLeft: 10
  }
});

export default EventItem