import { StackNavigationOptions } from "@react-navigation/stack";
import HomeScreen from "./HomeScreen/HomeScreen";
import SettingsScreen from "./SettingsScreen/SettingsScreen";

export const screenOptions: StackNavigationOptions = {
  cardStyle: {
    backgroundColor: '#000',
  },
}

export {
  HomeScreen,
  SettingsScreen
};