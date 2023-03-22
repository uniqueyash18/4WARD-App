import AsyncStorage from '@react-native-async-storage/async-storage';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import Routes from './src/Navigations/Routes';
import { sendstatus } from './src/redux/actions/stackAction';
import { store } from './src/redux/store';
export default function App() {
useEffect(()=>{
  (async()=>{
    let userData=await AsyncStorage.getItem("Details")
    let ProperData=await JSON.parse(userData)
    if(ProperData){
     sendstatus(true)
    }
  })();
},[])


  return (
    <View style={{ flex: 1 }}>
    <Provider store={store}>
      <Routes />
      </Provider>
      <StatusBar style="inverted" />
    </View>
  );
}

