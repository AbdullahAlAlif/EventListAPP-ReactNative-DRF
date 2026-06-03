import { View, Text, TextInput, TouchableOpacity, ScrollView, Alert } from 'react-native'
import { useState } from 'react'
import { StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useLayoutEffect } from 'react';
import { HeaderBackButton } from '@react-navigation/elements';

const NewEventScreen = () => {
    const navigation = useNavigation()

    useLayoutEffect(() => {
        navigation.setOptions({
          headerLeft: () => (
            <HeaderBackButton onPress={() => navigation.goBack()} />
          ),
        });
      }, []);

    const [formData, setFormData] = useState({
        name: '',
        description: '',
        date: '',
        location: ''
    })
    const [loading, setLoading] = useState(false)

    const handleInputChange = (field, value) => {
        setFormData(prev => ({
            ...prev,
            [field]: value
        }))
    }

    const handleSubmit = async () => {
        if (!formData.name || !formData.description || !formData.date || !formData.location) {
            Alert.alert('Error', 'Please fill all fields')
            return
        }

        setLoading(true)
        try {
            const response = await fetch('http://127.0.0.1:8000/api/events/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            })

            if (response.ok) {
                Alert.alert('Success', 'Event created successfully')
                setFormData({ name: '', description: '', date: '', location: '' })
            } else {
                Alert.alert('Error', 'Failed to create event')
            }
        } catch (error) {
            Alert.alert('Error', error.message)
        } finally {
            setLoading(false)
            navigation.goBack()
        }
    }

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>Create New Event</Text>
            
            <TextInput
                style={styles.input}
                placeholder="Event Name"
                value={formData.name}
                onChangeText={(text) => handleInputChange('name', text)}
            />
            
            <TextInput
                style={[styles.input, styles.multilineInput]}
                placeholder="Description"
                value={formData.description}
                onChangeText={(text) => handleInputChange('description', text)}
                multiline
            />
            
            <TextInput
                style={styles.input}
                placeholder="Date (YYYY-MM-DDTHH:mm:ssZ)"
                value={formData.date}
                onChangeText={(text) => handleInputChange('date', text)}
            />
            
            <TextInput
                style={styles.input}
                placeholder="Location"
                value={formData.location}
                onChangeText={(text) => handleInputChange('location', text)}
            />
            
            <TouchableOpacity
                style={[styles.button, loading && styles.buttonDisabled]}
                onPress={handleSubmit}
                disabled={loading}
            >
                <Text style={styles.buttonText}>{loading ? 'Creating...' : 'Create Event'}</Text>
            </TouchableOpacity>
        </ScrollView>
    )


}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        marginBottom: 15,
        fontSize: 16,   
    },
    multilineInput: {
        height: 100,
        textAlignVertical: 'top',
    },  
    button: {
        backgroundColor: '#8215ff',
        padding: 15,

        borderRadius: 5,
        alignItems: 'center',
    },
    buttonDisabled: {
        backgroundColor: '#aaa',
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
});




export default NewEventScreen