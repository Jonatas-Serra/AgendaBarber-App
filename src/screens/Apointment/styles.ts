import styled from 'styled-components/native';

interface Props {
  active: boolean;
}

interface ApointmentsTimeProps {
  past: boolean;
  bgPast: boolean;
}

export const Container = styled.View`
  flex: 1;
  align-items: center;
  padding: 0 20px;
  background-color: #f8fafb;
`;
export const Header = styled.View`
  align-items: center;
  flex-direction: row;
  margin-top: 40px;
`;

export const Title = styled.Text`
  font-size: 18px;
  font-family: 'RobotoSlab-ExtraBold';
  color: #181a20;
  margin-top: 20px;
  margin-bottom: 70px;
`;
export const ContentBtn = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background-color: #cccccc;
  border: 2px;
  border-color: #a5a5a5;
`;
export const Btn = styled.TouchableOpacity<Props>`
  width: 175px;
  height: 30px;
  align-items: center;
  justify-content: center;
  margin-bottom: 1px;

  ${(props) =>
    props.active &&
    `
    background-color: #f8fafb;
    border-radius: 10px;
    border: 1px solid #cccccc;
  `}
`;
export const BtnText = styled.Text`
  font-size: 14px;
  font-family: 'RobotoSlab-ExtraBold';
  color: #181a20;
`;
export const Content = styled.View`
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  margin: 40px 10px 0 10px;
`;
export const Apointments = styled.View<ApointmentsTimeProps>`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  border-radius: 15px;
  padding: 10px;
  border: 2px;
  background-color: #cccccc;
  border-color: #a5a5a5;
  margin-bottom: 10px;
  display: none;

  ${(props) =>
    props.past &&
    `
    display: flex;
    background-color: ${props.bgPast ? '#cccccc' : '#f8f8f8'};
  `}
`;
export const ApointmentContent = styled.View`
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`;
export const ApointmentContentPrice = styled.View`
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
`;
export const ApointmentTitle = styled.Text`
  font-size: 18px;
  font-family: 'RobotoSlab-ExtraBold';
  color: #181a20;
  margin-bottom: 5px;
`;
export const ApointmentPrice = styled.Text`
  font-size: 20px;
  font-family: 'RobotoSlab-ExtraBold';
  color: #181a20;
  margin-left: 25px;
`;
export const ApointmentDescription = styled.Text`
  font-size: 14px;
  font-family: 'RobotoSlab-Regular';
  color: #181a20;
`;
