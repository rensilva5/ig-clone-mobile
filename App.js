// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Login from './screens/Login';
import PhotoList from './screens/PhotoList';
import { Icon } from '@rneui/themed'

const Tab = createBottomTabNavigator()

export default function App() {
  return (

    <NavigationContainer>
      <Tab.Navigator screenOptions={() => {
        return {
          tabBarActiveTintColor: 'red',
          tabBarInactiveTintColor: 'gray'
        }
      }}>
        <Tab.Screen name='Home' component={PhotoList} options={() => {
          return {tabBarIcon: () => <Icon name='house' size='20' />}
        }} />
        <Tab.Screen name='Login' component={Login} options={() => {
          return { tabBarIcon: () => <Icon name='sc-telegram' type='evilicon' size='20' /> }

  
        }} />
      </Tab.Navigator>
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'white',
  },
  // container: {
  //   flex: 1,
  //   backgroundColor: 'darksalmon',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  
  // },
  // header: {
  //   color: "white",
  //   fontSize: 32,
  // }
});
