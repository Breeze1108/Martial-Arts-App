import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import RecordScreen from "../screens/RecordScreen";
import GymStack from "./GymStack";
import ProfileScreen from "../screens/ProfileScreen";

const Tab = createBottomTabNavigator();
export default function RootNavigation() {
  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen name="Home" component={GymStack} options={{headerShown: false}}/>
      <Tab.Screen name="+" component={RecordScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen}/>
    </Tab.Navigator>
  );
}
