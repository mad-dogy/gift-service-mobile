import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { RootStackParamList } from "@/shared/navigation";

import { HomeNavigator } from "../navigators/homeNavigator/homeNavigator";

const Stack = createNativeStackNavigator<RootStackParamList>();

export const Navigation = () => {
  return (
    <NavigationContainer >
      <Stack.Navigator initialRouteName="HomeNavigator" >
        <Stack.Screen name="HomeNavigator" component={HomeNavigator} options={{title: 'Overview', headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}