import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import ScheduleScreen from "../screens/ScheduleScreen";
import GymStack from "./GymStack";

const Tab = createBottomTabNavigator();
export default function RootNavigation() {
  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen name="GymStack" component={GymStack} options={{headerShown: false}}/>
      <Tab.Screen name="GymSchedule" component={ScheduleScreen} />
    </Tab.Navigator>
  );
}
