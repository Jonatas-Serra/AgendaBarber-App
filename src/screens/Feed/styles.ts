import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #cccccc;
`;

export const Header = styled.View`
  flex-direction: column;
  background-color: #181a20;
  padding: 20px 0;
`;

export const HeaderContent = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  margin-bottom: 20px;
`;

export const RowBtn = styled.View`
  flex-direction: row;
  padding: 0 18px;
`;

export const HeaderCity = styled.View`
  flex-direction: row;
`;

export const HeaderTitle = styled.Text`
  font-size: 18px;
  color: #f8fafb;
  font-family: 'RobotoSlab-Medium';
`;
export const BtnCloseMap = styled.TouchableOpacity`
  width: 50px;
  align-items: center;
  padding: 8px;
  background-color: rgba(245, 245, 245, 0.25);
  border-radius: 50px;
  border-width: 2px;
  border-color: rgba(245, 245, 245, 0.25);
  position: absolute;
  top: 20px;
  right: 20px;
`;
