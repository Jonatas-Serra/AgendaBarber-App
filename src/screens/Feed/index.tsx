import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Modal,
  TouchableOpacity,
} from 'react-native';

import RowBtn from '../../components/RowBtn';

import {
  Container,
  Header,
  HeaderTitle,
  HeaderCity,
  HeaderContent,
  BtnCloseMap,
} from './styles';

import TabMenu from '../../components/TabMenu';

import MapFeed from '../../components/MapFeed';
import BarberFeed from '../../components/BarberFeed';
import Search from '../../components/Search';

const Feed: React.FC = () => {
  const [modalMapVisible, setModalMapVisible] = useState(false);
  const [modalSearchVisible, setmodalSearchVisible] = useState(false);

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      enabled
    >
      <Container>
        <Header>
          <HeaderContent>
            <TouchableOpacity
              onPress={() => {
                setmodalSearchVisible(true);
              }}
            >
              <Icon name="search" size={28} color="#f8fafb" />
            </TouchableOpacity>
            <HeaderCity>
              <HeaderTitle>Porto Seguro</HeaderTitle>
              <Icon
                style={{ marginLeft: 16 }}
                name="angle-down"
                size={28}
                color="#f8fafb"
              />
            </HeaderCity>
            <TouchableOpacity
              onPress={() => {
                setModalMapVisible(true);
              }}
            >
              <Icon name="map-o" size={28} color="#f8fafb" />
            </TouchableOpacity>
          </HeaderContent>
          <Modal
            animationType="fade"
            transparent
            visible={modalSearchVisible}
            onRequestClose={() => {
              setmodalSearchVisible(!modalSearchVisible);
            }}
          >
            <Search />
            <TouchableOpacity
              style={{ position: 'absolute', top: 113, right: 25 }}
              onPress={() => {
                setModalMapVisible(true);
              }}
            >
              <Icon name="map-o" size={22} color="#181a20" />
            </TouchableOpacity>
            <TouchableOpacity
              style={{ position: 'absolute', top: 50, right: 25 }}
              onPress={() => {
                setmodalSearchVisible(false);
                setModalMapVisible(false);
              }}
            >
              <Icon name="close" size={22} color="#181a20" />
            </TouchableOpacity>
          </Modal>
          <Modal
            animationType="slide"
            transparent
            visible={modalMapVisible}
            onRequestClose={() => {
              setModalMapVisible(!modalMapVisible);
            }}
          >
            <MapFeed />
            <BtnCloseMap
              onPress={() => {
                setModalMapVisible(false);
                setmodalSearchVisible(false);
              }}
            >
              <Icon name="close" size={28} color="#181a20" />
            </BtnCloseMap>
          </Modal>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <RowBtn />
          </ScrollView>
        </Header>
        <ScrollView>
          <BarberFeed />
        </ScrollView>
      </Container>
      <TabMenu />
    </KeyboardAvoidingView>
  );
};

export default Feed;
