import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeScreen, PostScreen, ProfileScreen } from "../Screens";
// Icons //
import Icon from "react-native-vector-icons/Ionicons";
import IconHome from "react-native-vector-icons/Foundation";

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: [
          {
            display: "flex",
            borderTopWidth: 0,
          },
          null,
        ],
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <IconHome
              name="home"
              size={32}
              style={{ color: focused ? "#022C43" : "#DFDFDE" }}
            />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="PostScreen"
        component={PostScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon
              name="add-circle"
              size={40}
              style={{ color: focused ? "#022C43" : "#DFDFDE" }}
            />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon
              name="person"
              size={30}
              style={{ color: focused ? "#022C43" : "#DFDFDE" }}
            />
          ),
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;