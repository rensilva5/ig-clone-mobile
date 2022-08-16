// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView } from 'react-native';
import Hero from './components/Hero';
import PhotoList from './components/PhotoList';

export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <Hero/>
      <PhotoList/>
    </SafeAreaView>
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
