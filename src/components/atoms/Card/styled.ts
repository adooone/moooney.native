import styled from "styled-components/native";

export const SWrapper = styled.View`
  background: #202020;
  flex-grow: 1;
  flex-direction: row;
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  padding: 0 20px;
  align-items: center;
  border-radius: 10px;
  margin: 10px 0;
`;

export const SIconWrapper = styled.View`
  width: 30px;
  height: 30px;
  border-radius: 15px;
  margin-right: 20px;
`;

export const STextBlock = styled.View`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
`;

export const SCaption = styled.Text`
  color: #fff;
  font-size: 20px;
  margin-right: 10px;
  font-family: "Righteous_400Regular";
`;

export const SDescription = styled.Text`
  color: #777;
  font-size: 16px;
  font-family: "Righteous_400Regular";
`;

export const SDate = styled.Text`
  position: absolute;
  color: #777;
  right: 20px;
  font-size: 16px;
  font-family: "Righteous_400Regular";
`;
