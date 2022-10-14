import styled, { css } from 'styled-components/native';

interface BtnProps {
  isFocused: boolean;
}

export const Container = styled.View`
  flex-direction: row;
  padding: 0 18px;
`;

export const ContainerBtn = styled.TouchableOpacity<BtnProps>`
  flex-direction: column;
  width: 80px;
  height: 60px;
  justify-content: center;
  align-items: center;
  padding: 18px;
  border-radius: 45px;
  background-color: #272a30;
  margin-right: 18px;

  ${(props) =>
    props.isFocused &&
    css`
      background-color: #f4972e;
    `}
`;
export const Day = styled.Text`
  font-size: 20px;
  color: #f8fafb;
  font-family: 'RobotoSlab-ExtraBold';
`;
export const Dfweek = styled.Text`
  font-size: 12px;
  color: #f8fafb;
  font-family: 'RobotoSlab-Regular';
`;
