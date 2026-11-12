import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
import DefaultTextInput from "../../../components/DefaultTextInput";
import DefaultRoundedButton from "../../../components/DefaultRoundedButton";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "../../../navigator/MainStackNavigator";

interface Props extends StackScreenProps<RootStackParamList, "LoginScreem"> {}

export default function LoginScreem({ navigation, route }: Props) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.ImageBackground}
        source={require("../../../../assets/transporte.jpg")}
      />
      <View style={styles.form}>
        <Image
          source={require("../../../../assets/user.png")}
          style={styles.ImageUser}
        />
        <Text style={styles.textLogin}>LOGIN</Text>

        <DefaultTextInput
          icon={require("../../../../assets/email.png")}
          placeholder="Correo Electronico"
          onChangeText={(text) => {}}
          value=""
          keyboardType="email-address"
        />

        <DefaultTextInput
          icon={require("../../../../assets/password.png")}
          placeholder="Contraseña"
          onChangeText={(text) => {}}
          value=""
          secureTextEntry={true}
        />
        <DefaultRoundedButton text="INICIAR SESSION" onPress={() => {}} />

        <View style={styles.containerTextDontHAccount}>
          <View style={styles.divider}></View>
          <Text style={styles.textDontHaveAccount}>¿No tienes cuenta?</Text>
          <View style={styles.divider}></View>
        </View>

        <DefaultRoundedButton
          text="Crear Cuenta"
          onPress={() => navigation.navigate("RegisterScreen")}
          backgroundColor="black"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#120303af",
    alignItems: "center",
    justifyContent: "center",
  },

  ImageBackground: {
    width: "100%",
    height: "100%",
    opacity: 0.7,
  },
  form: {
    width: "85%",
    height: "75%",
    position: "absolute",
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    borderRadius: 40,
    justifyContent: "center",
    paddingHorizontal: 25,
  },
  ImageUser: {
    width: 150,
    height: 150,
    alignSelf: "center",
    marginBottom: 15,
  },
  textLogin: {
    color: "white",
    fontSize: 25,
    fontWeight: "bold",
    alignSelf: "center",
  },
  containerTextDontHAccount: {
    flexDirection: "row",
    alignSelf: "center",
    alignItems: "center",
    marginTop: 15,
  },
  textDontHaveAccount: {
    color: "white",
    fontSize: 18,
  },
  divider: {
    height: 1,
    width: 87,
    backgroundColor: "white",
    marginHorizontal: 5,
  },
});
