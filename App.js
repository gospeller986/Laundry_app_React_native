import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView ,useColorScheme ,ScrollView } from "react-native";
import { Provider } from "react-redux";
import Store from "./Store";
import HomeScreen from "./screens/HomeScreen";
import StackNavigator from "./StackNavigator";

export default function App() {
   const isDarkMode = useColorScheme() === 'dark'
  return (
    
    <Provider store = {Store} style={styles.container}>
     
   
    <StackNavigator/>
    <StatusBar style="auto"/>

    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e7e7e8",
    padding : 7 ,

    
  },
  whiteText: {
      color : '#ffffff'
  },
  darkText:{
      color: '#000000'
  }
});
