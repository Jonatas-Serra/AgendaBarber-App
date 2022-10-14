import React from 'react';
import Icon from 'react-native-vector-icons/Entypo';

import { useNavigation } from '@react-navigation/native';

import { Container, ContentBtn, Btn } from './styles';

const TabMenu: React.FC = () => {
  const navigation = useNavigation();
  return (
    <Container>
      <ContentBtn>
        <Btn onPress={() => navigation.navigate('Feed')}>
          <Icon
            style={{ transform: [{ rotate: '-90deg' }] }}
            name="scissors"
            size={20}
            color="#181a20"
          />
        </Btn>
        <Btn onPress={() => navigation.navigate('Apointment')}>
          <Icon
            name="controller-record"
            size={12}
            color="red"
            style={{ position: 'absolute', top: 0, right: 0 }}
          />
          <Icon name="calendar" size={20} color="#181a20" />
        </Btn>
        <Btn onPress={() => navigation.navigate('Profile')}>
          <Icon name="user" size={20} color="#181a20" />
        </Btn>
      </ContentBtn>
    </Container>
  );
};

export default TabMenu;
