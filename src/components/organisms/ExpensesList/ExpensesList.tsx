import React from "react";
import {
  SListHeader,
  SListWrapper,
} from "~/components/organisms/ExpensesList/styled";
import { expenses } from "~/core/meta/expenses";
import WalletIcon from "~/shared/assets/icons/wallet.svg";
import WalletRedIcon from "~/shared/assets/icons/wallet-red.svg";
import { Card, Icon } from "~/components/atoms";
import { IDayExpenses } from "~/core/models/expenses";
import { FlatList } from "react-native";

const ExpensesList: React.FC = () => {
  return (
    <>
      <SListHeader>Your expenses:</SListHeader>
      <SListWrapper>
        <FlatList<IDayExpenses>
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
    </>
  );
};

export default ExpensesList;
