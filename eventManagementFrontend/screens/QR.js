import React, { useState, useEffect } from "react";
import { Text, View, Button, StyleSheet } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";



const QR = () => {
   const [hasPermission, setHasPermission] = useState(null);
   const [scanned, setScanned] = useState(false);
   const [data, setData] = useState("");
   useEffect(() => {
       (async () => {
           const { status } = await BarCodeScanner.requestPermissionsAsync();
           setHasPermission(status === "granted");
       })();
   }, []);
   const handleBarCodeScanned = ({ data }) => {
       setScanned(true);
       setData(data);
       alert(`Scanned Data: ${data.name}`);
       if (data) {
           // navigation to details screen
           // const {id, title, description, date, location, qrCode}= data;
            // navigation.navigate('EventDetails',{eventId:id,  eventTitle:title, eventDescription:description,eventDate:date,  eventLocation:location})
       }
   };
   if (hasPermission === null) {
       return <Text>Requesting for camera permission...</Text>;
   }
   if (hasPermission === false) {
       return <Text>No access to camera</Text>;
   }
   return (
       <View style={styles.container}>
           <BarCodeScanner
               onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
               style={StyleSheet.absoluteFillObject}
           />
           {scanned && (
               <Button title="Tap to Scan Again" onPress={() => setScanned(false)} />
           )}
           <Text>Scanned Data: {data}</Text>
       </View>
   );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffe6b868',
  },
});

export default QR