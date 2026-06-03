import { Ionicons } from '@expo/vector-icons';
import {Image} from 'react-native';
export const navOptions = (nav)=>{
    return {
        headerTintColor: '#46484f',
        headerStyle :{
            backgroundColor: '#3b95e3',
            height: 100,
        },
        headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 28,
        },
        headerRight: () => (
            <Ionicons 
                name="menu" size={33} 
                color="#46484f" 
                style={{marginRight:15}} 
                onPress={()=>{nav.toggleDrawer()}} />
        ),
       headerLeft: () =>(
        <>
            <Image 
                source={require('../assets/logo.png')} 
                style={{
                    width: 40, 
                    height: 40, 
                    marginLeft:15,
                    borderRadius:5}} 
            />
           
        </>

       )
        
    }
}