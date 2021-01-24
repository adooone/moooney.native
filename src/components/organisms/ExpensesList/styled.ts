import styled from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";
import { DARK_COLOR_100 } from "~/styles/colors";
import { IDayExpenses } from "~/core/models/expenses";
import { FlatList } from "react-native";

export const SExpensesList = styled.View`
  width: 100%;
  flex: 1;
  justify-content: center;
  overflow: hidden;
`;

export const SListHeader = styled.Text`
  font-size: 20px;
  color: #777;
  padding: 0 20px;
  margin-top: 40px;
  margin-bottom: 10px;
`;

export const SListContainer = styled.View`
  width: 100%;
  border-top-right-radius: 30px;
  border-top-left-radius: 30px;
  background: ${DARK_COLOR_100};
  overflow: hidden;
  flex: 1;
`;

export const SListWrapper = styled.View`
  width: 100%;
  flex: 1;
`;

export const SBlurredTop = styled(LinearGradient)`
  position: absolute;
  top: 0;
  width: 100%;
  height: 20px;
`;
