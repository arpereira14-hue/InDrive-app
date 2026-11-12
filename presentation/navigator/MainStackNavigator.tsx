import { StackActions } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreem from "../screens/auth/login/LoginScreen";
import RegisterScreem from "../screens/auth/register/RegisterScreen";

export type RootStackParamList = {
  LoginScreem: undefined;
  RegisterScreen: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export const MainStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        // Ocultar heder de la navehacion
        options={{ headerShown: false }}
        name="LoginScreem"
        component={LoginScreem}
      />
      <Stack.Screen name="RegisterScreen" component={RegisterScreem} />
    </Stack.Navigator>
  );
};
