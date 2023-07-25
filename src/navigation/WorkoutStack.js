import { createStackNavigator } from "@react-navigation/stack";
import WorkoutsScreen from "../screens/WorkoutsScreen";
import PunchScreen from "../screens/PunchScreen";
import KickScreen from "../screens/KickScreen";

const Stack = createStackNavigator();
export default function WorkoutsStack() {
  return (
    <Stack.Navigator initialRouteName="Workout">
      <Stack.Screen name="Workout" component={WorkoutsScreen} />
      <Stack.Screen name="Punch" component={PunchScreen} />
      <Stack.Screen name="Kick" component={KickScreen}/>
    </Stack.Navigator>
  );
}