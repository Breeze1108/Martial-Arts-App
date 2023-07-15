import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import GymScreen from "../screens/GymScreen";

const Stack = createStackNavigator();
export default function GymStack() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Gym" component={GymScreen} />
    </Stack.Navigator>
  );
}
