import React from "react";
import { StackScreenProps } from "@react-navigation/stack";
import { useFonts } from "expo-font";
import { Righteous_400Regular } from "@expo-google-fonts/righteous";
import { RootStackParamList } from "~/core/models/navigator";
import ExpensesList from "~/components/organisms/ExpensesList";
import {
  SHomeView,
  SCaption,
  SBudget,
} from "./styled";
import { useColorScheme } from "react-native-appearance";

type tProps = StackScreenProps<RootStackParamList, "Home">;

const HomeScreen: React.FC<tProps> = ({ navigation }) => {
  const [loaded] = useFonts({
    Righteous_400Regular,
  });

  const colorScheme = useColorScheme();
  console.log('🚀 > colorScheme', colorScheme);

  if (!loaded) {
    return null;
  }

  return (
    <SHomeView>
      <SCaption>Moooney</SCaption>
      <SBudget>200 $ per day</SBudget>
      <ExpensesList />
    </SHomeView>
  );
};

export default HomeScreen;
