import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import Routes from './src/Navigations/Routes';
export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <Routes />
      <StatusBar style="inverted" />
    </View>
  );
}

