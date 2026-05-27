import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, Button, TouchableOpacity} from 'react-native';

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
        
        <View style={styles.containerTextInput}>

          <Image
          style={styles.textInputIcon}
          source={require('./assets/email.png')}

          />
          <TextInput
            style={styles.textInput}
            placeholder='Correo Electronico'
            placeholderTextColor='white'
          />
        </View>

        <View style={styles.containerTextInput}>

          <Image
          style={styles.textInputIcon}
          source={require('./assets/password.png')}
          />

          <TextInput
            style={styles.textInput}
            placeholder='Contraseña'
            placeholderTextColor='white'
          />
        </View>

        <TouchableOpacity style={styles.roundedButton}>
          <Text style={styles.textButton}>INICIAR SESION</Text>
        </TouchableOpacity>
        

        <Text style={styles.textDontHaveAccount} >No tienes cuenta</Text>

        <TouchableOpacity style={styles.roundedButton}>
          <Text style={styles.textButton}>REGISTRATE</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#120303af',
    alignItems: 'center',
    justifyContent: 'center',
  },

  ImageBackground:{
    width:'100%',
    height: '100%',
    opacity: 0.7
  },
  form:{
    width:'85%',
    height: '75%',
    position: 'absolute',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 40,
    justifyContent: 'center',
    paddingHorizontal: 25
  },
  ImageUser:{
    width:150,
    height:150, 
    alignSelf:'center',
    marginBottom: 15
  },
  textLogin:{
    color:'white',
    fontSize:25,
    fontWeight:'bold',
    alignSelf: 'center'
  },
  containerTextInput:{
    flexDirection: 'row',
    alignItems: "center",
    marginTop: 10

  },
  textInput:{
    width: '90%',
    height: 50,
    borderBottomWidth: 1,
    borderBottomColor: 'white',
    color: 'white',
    fontSize: 18
  }, 
  textInputIcon:{
    width: 25,
    height: 25,
    marginRight: 15
  },
  textDontHaveAccount: {
    color: 'white'
  },
  roundedButton:{
    width: '100%',
    height: 55,
    backgroundColor:'red',
    alignItems: 'center',
    justifyContent: "center",
    borderRadius: 50,
    marginTop: 25
  },
  textButton:{
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold'
  }


});
