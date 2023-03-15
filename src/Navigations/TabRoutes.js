import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Image } from "react-native";
import ImagePath from "../Constants/ImagePath";
import NavigationStrings from "../Constants/NavigationStrings";
import { AddPost, ChangePwd, EditProfile, Home, Notification, PostDetails, Profile, Seacrh } from "../Screens";
const Tab = createBottomTabNavigator();
export default function TabRoutes() {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false, tabBarShowLabel: false }}
    >
      <Tab.Screen
        name={NavigationStrings.HOMESTACK}
        component={HomeStack}
        options={{
          tabBarIcon: ({ focused }) => {
            return focused ? (
              <Image source={ImagePath.icHomeActive} />
            ) : (
              <Image source={ImagePath.icHome} />
            );
          },
          tabBarStyle: {
            backgroundColor: "rgba(76,76,76,1)",
            height: 80,
            borderRadius: 8,
            position: "absolute",
            borderTopWidth: 0,
          },
        }}
      />
      <Tab.Screen
        name={NavigationStrings.SEARCH}
        component={Seacrh}
        options={{
          tabBarHideOnKeyboard: true,
          tabBarIcon: ({ focused }) => {
            return focused ? (
              <Image style={{ tintColor: "red" }} source={ImagePath.icSearch} />
            ) : (
              <Image source={ImagePath.icSearch} />
            );
          },
          tabBarStyle: {
            backgroundColor: "rgba(76,76,76,1)",
            height: 80,
            borderRadius: 8,
            position: "absolute",
            borderTopWidth: 0,
          },
        }}
      />
      <Tab.Screen
        name={NavigationStrings.ADDPOST}
        component={AddPost}
        options={{
          tabBarIcon: ({ focused }) => {
            return focused ? (
              <Image source={ImagePath.icAddActive} />
            ) : (
              <Image source={ImagePath.icAdd} />
            );
          },
          tabBarStyle: {
            backgroundColor: "rgba(76,76,76,1)",
            height: 80,
            borderRadius: 8,
            position: "absolute",
            borderTopWidth: 0,
            display: "none",
          },
        }}
      />
      <Tab.Screen
        name={NavigationStrings.NOTIFICATION}
        component={Notification}
        options={{
          tabBarIcon: ({ focused }) => {
            return focused ? (
              <Image style={{ tintColor: "red" }} source={ImagePath.icNotify} />
            ) : (
              <Image source={ImagePath.icNotify} />
            );
          },
          tabBarStyle: {
            backgroundColor: "rgba(76,76,76,1)",
            height: 80,
            borderRadius: 8,
            position: "absolute",
            borderTopWidth: 0,
          },
        }}
      />
      <Tab.Screen
        name={NavigationStrings.PROFILESTACK}
        component={ProfileStack}
        options={{
          tabBarIcon: ({ focused }) => {
            return focused ? (
              <Image style={{ tintColor: "red" }} source={ImagePath.icUser} />
            ) : (
              <Image source={ImagePath.icUser} />
            );
          },
          tabBarStyle: {
            backgroundColor: "rgba(76,76,76,1)",
            height: 80,
            borderRadius: 8,
            position: "absolute",
            borderTopWidth: 0,
          },
        }}
      />
    </Tab.Navigator>
  );
}

const Stack = createNativeStackNavigator();

export const HomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false, tabBarShowLabel: false }}
    >
      <Stack.Screen name={NavigationStrings.HOME} component={Home} />
      <Stack.Screen name={NavigationStrings.POST_DETAILS} component={PostDetails} />
    </Stack.Navigator>
  );
};
export const ProfileStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false, tabBarShowLabel: false }}
    >
      <Stack.Screen name={NavigationStrings.PROFILE} component={Profile} />
      <Stack.Screen name={NavigationStrings.EDIT_PROFILE} component={EditProfile} />
      <Stack.Screen name={NavigationStrings.CHANGE_PWD} component={ChangePwd} />
    </Stack.Navigator>
  );
};
