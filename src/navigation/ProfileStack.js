import { createStackNavigator } from "@react-navigation/stack";
import EditProfileScreen from "../screens/EditProfileScreen";
import ProfileScreen from "../screens/ProfileScreen";

const Stack = createStackNavigator();
export default function ProfileStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName="Profile">
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="EditProfile" component={EditProfileScreen} />
    </Stack.Navigator>
  );
}
