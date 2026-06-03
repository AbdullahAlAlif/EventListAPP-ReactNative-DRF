import React from 'react'
import { View , Text, FlatList,RefreshControl} from 'react-native'
//import { DUMMY_DATA } from '../../data/dummy'
import EventItem from './EventItem';

const EventList = ({events, onRefresh}) => {
    const renderItem = ({item}) => (
       <EventItem id={item.id} title={item.name} description={item.description} date={item.date} location={item.location} qrCode={item.qr_code} />
    );
  return (
    <View style={{flex:1, width:'100%', padding:20}}>
       <FlatList
        data={events}
        keyExtractor={item => item.id}
        renderItem={({item}) => renderItem({item})}
        refreshControl={
            <RefreshControl refreshing={false} onRefresh={onRefresh} />
        }
       />
    </View>
  )
}
    

export default EventList