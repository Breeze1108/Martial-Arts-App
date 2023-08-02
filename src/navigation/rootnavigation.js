import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import RecordScreen from "../screens/RecordScreen";
import GymStack from "./ProfileStack";
import ProfileScreen from "../screens/ProfileScreen";
import WorkoutsScreen from "../screens/WorkoutsScreen";
import WorkoutsStack from "./WorkoutStack";
import { Icon } from 'react-native-elements';

const Tab = createBottomTabNavigator();
export default function RootNavigation() {
  return (
    <Tab.Navigator
    initialRouteName="Home"
    screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: { backgroundColor: 'black', height: 80, borderRadius: 15, },
        tabBarIcon: ({ color, size }) => {
            let iconName;
            if (route.name === 'Home') {
                iconName = 'home'; // Change this to the name of the icon you want to use for the Home tab
            } else if (route.name === 'Workout') {
                iconName = 'yin-yang'; // Change this to the name of the icon you want to use for the LoadScreen tab
            } else if (route.name === 'Profile') {
                iconName = 'user'; // Change this to the name of the icon you want to use for the Profile tab
              } else if (route.name === '+') {
                iconName = 'upload';
            }
            return <Icon type="font-awesome-5" name={iconName} size={36} color={color} marginTop={10} />;
        },
    })}
    tabBarOptions={{
        activeTintColor: '#BE3232', // Change the color for the active tab
        inactiveTintColor: 'white', // Change the color for the inactive tabs
        showLabel: false,
    }}
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
