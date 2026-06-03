import { Button } from '@react-navigation/elements'
import { View, Text, StyleSheet,TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import EventList from '../components/events/EventList';
import { useEffect, useState } from 'react';


const HomeScreen = () => {
    const [events, setEvents] = useState([]);
    const [refresh, setRefresh] = useState(false);

    const handleRefresh = () => {
        setRefresh(prevState=>!prevState);
        fetchEvents();
        console.log("Refreshed");
    };


    useEffect(() => {
        fetchEvents();
    }, [refresh]);

    const fetchEvents = async () => {
            try {
                const response = await fetch('http://localhost:8000/api/events/');
                const data = await response.json();
                setEvents(data);
            } catch (error) {
                console.error("Error fetching events:", error);
            }
        };
    const navigation = useNavigation();
  return (
    <View style={styles.screenContainer}>
        <TouchableOpacity 
            style={styles.button} 
            onPress={() => navigation.navigate('NewEvent')}
        >
        <Text style={styles.buttonText}>Create New Event</Text>
        </TouchableOpacity>
      <EventList events={events} onRefresh={handleRefresh} />
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
      button: {
        backgroundColor: '#8215ff',
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 8,
        alignItems: 'center',
        marginVertical: 20,

    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },

})

export default HomeScreen