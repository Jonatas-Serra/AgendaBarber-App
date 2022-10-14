import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  padding: 0 20px;
  background-color: #f8fafb;
`;

export const Header = styled.View`
  align-items: center;
  flex-direction: row;
  margin-top: 20px;
`;

export const Title = styled.Text`
  font-size: 18px;
  font-family: 'RobotoSlab-Medium';
  color: #181a20;
  margin-top: 20px;
`;
export const ContentProfile = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  padding: 0 4px;
`;
export const ContentProfileImage = styled.View`
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 20px;
  margin-right: 20px;
`;
export const Avatar = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 50px;
`;
export const ProfileImageIcon = styled.TouchableOpacity`
  position: absolute;
  top: 80%;
  left: 5%;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #cccccc;
  border-radius: 50px;
  border-width: 5px;
  border-color: #cccccc;
`;
export const ProfileContentInformations = styled.View`
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  margin-right: 20px;
`;
export const ProfileName = styled.Text`
  font-size: 20px;
  font-family: 'RobotoSlab-Medium';
  color: #181a20;
  margin-bottom: 5px;
`;
export const ProfileInformations = styled.Text`
  font-size: 14px;
  font-family: 'RobotoSlab-Medium';
  color: #181a20;
`;
export const Content = styled.View`
  width: 100%;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  margin-top: 80px;
`;
export const Btn = styled.TouchableOpacity`
  padding: 15px;
  margin-bottom: 18px;
`;

export const BtnEditInfo = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  padding: 8px;
  background-color: #cccccc;
  border-radius: 50px;
  border-width: 5px;
  border-color: #cccccc;
`;
export const Footer = styled.View`
  width: 100%;
  height: 22%;
  align-items: flex-end;
  justify-content: space-between;
  flex-direction: row;
  margin-top: 20px;
  padding-bottom: 40px;
  opacity: 0.6;
`;
export const BtnCam = styled.TouchableOpacity`
  padding: 2px;
`;
