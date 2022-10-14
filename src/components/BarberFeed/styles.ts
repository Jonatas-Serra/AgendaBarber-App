import styled, { css } from 'styled-components/native';

interface BtnProps {
  isFocused: boolean;
}

export const BarberContent = styled.View`
  background-color: #f8fafb;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;
export const BarberCarrousel = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`;
export const BarberInformation = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: stretch;
  margin: 10px 0 0 0;
`;

export const BarberTitle = styled.Text`
  font-size: 36px;
  color: #181a20;
  font-family: 'RobotoSlab-ExtraBold';
`;
export const InformationText = styled.Text`
  font-size: 16px;
  color: #181a20;
  font-family: 'RobotoSlab-Regular';
  margin-bottom: 20px;
`;
export const Details = styled.View`
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
  padding: 18px 0;
  margin-bottom: 20px;
  border-bottom-width: 2px;
  border-bottom-color: #cccccc;
  border-top-width: 2px;
  border-top-color: #cccccc;
`;
export const ContentDetails = styled.View`
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

export const DetailsText = styled.Text`
  font-size: 26px;
  color: #181a20;
  font-family: 'RobotoSlab-ExtraBold';
  margin-left: 10px;
`;
export const Schedules = styled.View`
  flex-direction: row;
  padding: 0 0 18px 18px;
`;
export const BtnAvalibleHours = styled.TouchableOpacity<BtnProps>`
  flex-direction: column;
  width: 90px;
  height: 60px;
  justify-content: center;
  align-items: center;
  padding: 18px;
  border-radius: 45px;
  background-color: #cccccc;
  margin-right: 18px;

  ${(props) =>
    props.isFocused &&
    css`
      background-color: #f4972e;
    `}
`;
export const HourText = styled.Text`
  font-size: 14px;
  color: #181a20;
  font-family: 'RobotoSlab-Medium';
`;
export const MeridianText = styled.Text`
  font-size: 12px;
  color: #181a20;
  font-family: 'RobotoSlab-Regular';
`;
