import React from "react";
import { SafeAreaView, StatusBar, StyleSheet } from "react-native";
import { Provider as ReduxProvider } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import store from "./src/redux/store";
import { Colors } from "./src/theme/colors";
import SearchStack from "./src/navigation/SearchStack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import About from "./src/screens/About";

const Tab = createBottomTabNavigator();
function App() {
  return (
    <NavigationContainer>
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Home" component={MyTabs} options={{
        tabBarIcon: ({ color, size }) => (
        <Ionicons name="home" color={color} size={size} /> )
      }}/>
      <Tab.Screen name="About" component={About} options={{
        tabBarIcon: ({ color, size }) => (
        <Ionicons name="information-circle" color={color} size={size} /> )
      }}/>
    </Tab.Navigator>
    </NavigationContainer>
  );
}

class MyTabs extends React.Component {
  render() {
    return (
    <ReduxProvider store={store}>
      <StatusBar barStyle="light-content" backgroundColor={Colors.blue[800]} />
      <SafeAreaView style={styles.container}>
        <SearchStack />
      </SafeAreaView>
    </ReduxProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
