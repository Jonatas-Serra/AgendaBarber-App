import styled from 'styled-components/native';

export const Container = styled.View`
  width: 70%;
  height: 50px;
  background-color: #f4972e;
  border-radius: 20px;
  position: absolute;
  top: 92%;
  left: 15%;
  justify-content: center;
  align-items: center;
`;
export const ContentBtn = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Btn = styled.TouchableOpacity`
  width: 40px;
  height: 35px;
  align-items: center;
  justify-content: center;
  margin: 0 25px;
`;
