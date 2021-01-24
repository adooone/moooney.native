import React from "react";
import { FlatList } from "react-native";
import { Option } from "~/components/atoms";
import { options } from "~/core/meta/options";
import { IOption } from "~/core/models/settings";
import { SOptionsList } from "./styled";

const OptionsList: React.FC = () => {
  return (
    <SOptionsList>
      <FlatList<IOption>
        style={{ padding: 10 }}
        keyExtractor={(item) => item.text}
        data={options}
        renderItem={({ item }) => (
          <Option text={item.text} />
        )}
      />
    </SOptionsList>
  );
};

export default OptionsList;
