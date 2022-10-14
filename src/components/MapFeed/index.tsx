/* eslint-disable @typescript-eslint/no-var-requires */
import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

import Icon from 'react-native-vector-icons/FontAwesome';
import { Container } from './styles';
import { BtnCloseMap } from '../../screens/Feed/styles';
import mapstyle from '../../utils/mapstyle.json';

import { markers } from '../../models/Barbers';

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

const MapFeed: React.FC = () => {
  const point = require('../../assets/point.png');
  const point2 = require('../../assets/point2.png');
  const [isPreselected, setisPreselected] = useState(0);
  const [longitudeDelta, setLongitudeDelta] = useState(0.02);
  const [regionViwer, setRegionViwer] = useState({
    latitude: -16.442522,
    longitude: -39.069895,
    latitudeDelta: 0.01,
    longitudeDelta,
  });
  const handleInputFocus = (id: number) => {
    setisPreselected(id);
  };
  return (
    <Container>
      <MapView
        showsMyLocationButton={false}
        showsUserLocation
        style={styles.map}
        toolbarEnabled={false}
        showsCompass
        zoomControlEnabled={false}
        showsBuildings={false}
        customMapStyle={mapstyle}
        region={{
          ...regionViwer,
        }}
      >
        {markers.map(({ id, coordinate, description, title }) => (
          <Marker
            isPreselected={isPreselected === id}
            key={id}
            coordinate={coordinate}
            title={title}
            description={description}
            onPress={() => {
              handleInputFocus(id);
              setRegionViwer({
                latitude: coordinate.latitude,
                longitude: coordinate.longitude,
                latitudeDelta: 0.01,
                longitudeDelta,
              });
            }}
            image={isPreselected === id ? point2 : point}
          />
        ))}
      </MapView>
      <BtnCloseMap
        style={{ top: 320 }}
        onPress={() => {
          setLongitudeDelta(
            longitudeDelta > 0.005 ? longitudeDelta / 4 : 0.005,
          );
          setRegionViwer({
            latitude: regionViwer.latitude,
            longitude: regionViwer.longitude,
            latitudeDelta: 0.01,
            longitudeDelta,
          });
        }}
      >
        <Icon name="plus" size={28} color="#181a20" />
      </BtnCloseMap>
      <BtnCloseMap
        style={{ top: 390 }}
        onPress={() => {
          setLongitudeDelta(longitudeDelta + 0.008);

          setRegionViwer({
            latitude: regionViwer.latitude,
            longitude: regionViwer.longitude,
            latitudeDelta: 0.01,
            longitudeDelta,
          });
        }}
      >
        <Icon name="minus" size={28} color="#181a20" />
      </BtnCloseMap>
      <BtnCloseMap style={{ top: 470 }}>
        <Icon name="location-arrow" size={28} color="#181a20" />
      </BtnCloseMap>
    </Container>
  );
};

export default MapFeed;
