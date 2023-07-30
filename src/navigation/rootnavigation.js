import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import RecordScreen from "../screens/RecordScreen";
import GymStack from "./ProfileStack";
import ProfileScreen from "../screens/ProfileScreen";
import WorkoutsScreen from "../screens/WorkoutsScreen";
import WorkoutsStack from "./WorkoutStack";
import  MaterialCommunityIcons  from 
'react-native-vector-icons/MaterialCommunityIcons';
import { NavigationContainer } from "@react-navigation/native";

const Tab = createBottomTabNavigator();
export default function RootNavigation() {
  return (
      <Tab.Navigator
       labeled={false} barStyle={{ backgroundColor: 'black' }} 
      activeColor="white" 
  
        initialRouteName="Home"
      >
        <Tab.Screen
          name="Workout"
          component={WorkoutsStack}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Tab.Screen name="+" component={RecordScreen} />
        <Tab.Screen
          name="Profile"
          component={GymStack}
          options={{ headerShown: false }}
        />
      </Tab.Navigator>
  );
}
