import styled from 'styled-components/native';
import { getBottomSpace } from 'react-native-iphone-x-helper';

export const Container = styled.View`
  flex: 1;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
`;
export const Title = styled.Text`
  font-size: 28px;
  color: #f8fafb;
  font-family: 'RobotoSlab-Medium';
  margin: 28px 0 24px;
`;
export const ForgotPassword = styled.TouchableOpacity`
  margin-top: 24px;
`;
export const ForgotPasswordText = styled.Text`
  color: #f8fafb;
  font-size: 16px;
  font-family: 'RobotoSlab-Regular';
`;
export const CreateAccountButton = styled.TouchableOpacity`
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  background: #272a30;
  border-top-width: 1px;
  border-color: #232129;
  padding: 16px 0 ${16 + getBottomSpace()}px;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;
export const CreateAccountButtonText = styled.Text`
  color: #f4972e;
  font-size: 18px;
  font-family: 'RobotoSlab-Regular';
  margin-left: 16px;
`;
