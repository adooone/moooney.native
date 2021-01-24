import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeScreen, SettingsScreen } from "~/screens";
import { Icon } from "~/components/atoms";
import WalletIcon from "~/shared/assets/icons/wallet-light.svg";
import StatsIcon from "~/shared/assets/icons/stats.svg";
import { screenOptions, tabBarOptions } from "~/config/navigator";
import { sceneContainerStyle } from "~/styles/navigator";
import { PRIMARY_COLOR } from "~/styles/colors";

const Tab = createBottomTabNavigator();

const Navigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={screenOptions}
        sceneContainerStyle={sceneContainerStyle}
        tabBarOptions={tabBarOptions}
      >
        <Tab.Screen
          options={{
            tabBarIcon: ({ focused }) => (
              <Icon
                fill={focused ? PRIMARY_COLOR : undefined}
                src={WalletIcon}
                height={25}
                width={25}
              />
            ),
          }}
          name="Home"
          component={HomeScreen}
        />
        <Tab.Screen
          options={{
            tabBarIcon: ({ focused }) => (
              <Icon
                fill={focused ? PRIMARY_COLOR : undefined}
                src={StatsIcon}
                height={25}
                width={25}
              />
            ),
          }}
          name="Settings"
          component={SettingsScreen}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
