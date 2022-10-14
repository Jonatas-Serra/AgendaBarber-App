import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #cccccc;
  border-radius: 15px;
  align-items: center;
`;
export const Header = styled.View`
  margin-top: 100px;
  flex-direction: row;
  padding: 0 20px;
`;
export const TextInput = styled.TextInput`
  flex: 1;
  color: #181a20;
  font-size: 22px;
  font-family: 'RobotoSlab-ExtraBold';
`;
export const ContentSearch = styled.View`
  flex: 1;
  width: 87%;
  flex-direction: column;
  align-items: center;
  padding: 0 10px 0 10px;
  margin-top: 20px;
`;
export const BarberSearch = styled.View`
  width: 100%;
  flex-direction: column;
  background-color: #f8fafb;
  border-radius: 15px;
  align-items: center;
  justify-content: space-between;
  padding: 20px 10px;
  margin-bottom: 20px;
`;
export const Details = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  padding: 18px 10px 0 10px;
`;
export const ContentDetails = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const DetailsText = styled.Text`
  font-size: 16px;
  color: #181a20;
  font-family: 'RobotoSlab-ExtraBold';
  margin-left: 10px;
`;
