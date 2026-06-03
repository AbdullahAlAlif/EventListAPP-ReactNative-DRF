import { View, Text, StyleSheet, ScrollView } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native';
import { useLayoutEffect } from 'react';
import { HeaderBackButton } from '@react-navigation/elements';

const EventDetailsScreen = () => {
  const route = useRoute();
  const navigation = useNavigation()
  const { eventId, eventTitle, eventDescription, eventDate, eventLocation } = route.params;
  
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: "Event: " + eventTitle,
      headerLeft: () => (
        <HeaderBackButton onPress={() => navigation.goBack()} />
      ),
    });
  }, [eventTitle, navigation]);

  return (
    <ScrollView style={styles.screenContainer}>
      <View style={styles.headerCard}>
        <Text style={styles.title}>{eventTitle}</Text>
      </View>

      <View style={styles.contentContainer}>
        <View style={styles.detailCard}>
          <Text style={styles.label}>📅 Date</Text>
          <Text style={styles.value}>{eventDate}</Text>
        </View>

        <View style={styles.detailCard}>
          <Text style={styles.label}>📍 Location</Text>
          <Text style={styles.value}>{eventLocation}</Text>
        </View>

        <View style={styles.detailCard}>
          <Text style={styles.label}>📝 Description</Text>
          <Text style={styles.value}>{eventDescription}</Text>
        </View>

        <View style={styles.detailCard}>
          <Text style={styles.label}>🎟️ Event ID</Text>
          <Text style={styles.value}>{eventId}</Text>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    screenContainer: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    headerCard: {
        backgroundColor: '#8d58d8',
        paddingVertical: 24,
        paddingHorizontal: 16,
        marginBottom: 16,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#fff',
    },
    contentContainer: {
        paddingHorizontal: 16,
        paddingBottom: 24,
    },
    detailCard: {
        backgroundColor: '#fff',
        borderRadius: 12,
        padding: 16,
        marginBottom: 12,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    label: {
        fontSize: 14,
        fontWeight: '600',
        color: '#6200ee',
        marginBottom: 8,
    },
    value: {
        fontSize: 16,
        color: '#333',
        lineHeight: 24,
    },
})

export default EventDetailsScreen