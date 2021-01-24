import React from "react";
import { FlatList } from "react-native";
import {
  SListHeader,
  SListContainer,
  SListWrapper,
  SExpensesList,
  SBlurredTop,
} from "~/components/organisms/ExpensesList/styled";
import { expenses } from "~/core/meta/expenses";
import WalletIcon from "~/shared/assets/icons/wallet.svg";
import WalletRedIcon from "~/shared/assets/icons/wallet-red.svg";
import { Card, Icon } from "~/components/atoms";
import { DARK_COLOR_100 } from "~/styles/colors";
import { IDayExpenses } from "~/core/models/expenses";

const ExpensesList: React.FC = () => {
  return (
    <SExpensesList>
      <SListHeader>Your expenses:</SListHeader>
      <SListContainer>
        <SListWrapper>
          <FlatList<IDayExpenses>
            style={{ padding: 10 }}
            keyExtractor={(item) => item.date}
            data={expenses.days}
            renderItem={({ item: day }) => (
              <Card
                icon={
                  <Icon
                    src={day.status === "success" ? WalletIcon : WalletRedIcon}
                  />
                }
                caption={`${day.spentMoney} $`}
                description={day.info}
                date={day.date}
              />
            )}
          />
        </SListWrapper>
        <SBlurredTop colors={[DARK_COLOR_100, "transparent"]} />
      </SListContainer>
    </SExpensesList>
  );
};

export default ExpensesList;
