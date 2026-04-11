import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.ImageBackground}
        source={require('./assets/transporte.jpg')}
      />
      <View style={styles.form}>
        <Image
        source={require('./assets/user.png')}
        style={styles.ImageUser}
        />
        <Text style={styles.textLogin}>LOGIN</Text>
        <TextInput
        style={styles.TextInput}
        />

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#120303af',
    //alignItems: 'center',
    //justifyContent: 'center',
  },

  ImageBackground:{
    width:'100%',
    height: '100%',
    opacity: 0.7
  },
  form:{
    width:'100%',
    position: 'absolute'
  },
  ImageUser:{
    width:150,
    height:100
  },
  textLogin:{
    color:'white',
    fontSize:25,
    fontWeight:'bold'
  },
  TextInput:{
    borderBottomWidth: 1,
    borderBottomColor: 'white',
    color: 'white'
    
  }

});
