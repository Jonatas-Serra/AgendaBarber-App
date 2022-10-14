import React, { useState } from 'react';
import { Image, ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';

import { Barbers } from '../../models/Barbers';
import { SchedulesBarber } from '../../models/SchedulesBarber';

import {
  BarberContent,
  BarberCarrousel,
  BarberTitle,
  BarberInformation,
  InformationText,
  Details,
  ContentDetails,
  DetailsText,
  Schedules,
  BtnAvalibleHours,
  HourText,
  MeridianText,
} from './styles';

interface SchedulesBarber {
  id: number;
  meridian: string;
  hour: string;
}

interface Barbers {
  id: number;
  name: string;
  address: string;
  photo: string;
  photo2: string;
  photo3: string;
  phone: string;
  rating: number;
}

const BarberFeed: React.FC = () => {
  const [isFocused, setIsFocused] = useState(0);
  const handleInputFocus = (id: number) => {
    setIsFocused(id);
  };
  return (
    <>
      {Barbers.map((barber: Barbers) => (
        <BarberContent key={barber.id}>
          <BarberCarrousel>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <Image
                source={{ uri: barber.photo }}
                style={{
                  width: 330,
                  height: 220,
                  borderRadius: 15,
                  marginHorizontal: 5,
                }}
              />
              <Image
                source={{ uri: barber.photo2 }}
                style={{
                  width: 330,
                  height: 220,
                  borderRadius: 15,
                  marginHorizontal: 5,
                }}
              />
              <Image
                source={{ uri: barber.photo3 }}
                style={{
                  width: 330,
                  height: 220,
                  borderRadius: 15,
                  marginHorizontal: 5,
                }}
              />
            </ScrollView>
          </BarberCarrousel>
          <TouchableOpacity>
            <BarberTitle>{barber.name}</BarberTitle>
          </TouchableOpacity>
          <BarberInformation>
            <InformationText>{barber.address}</InformationText>
            <InformationText style={{ fontFamily: 'RobotoSlab-ExtraBold' }}>
              {'  '}
              15 min.
            </InformationText>
            <Icon
              style={{ marginLeft: 16 }}
              name="map-marker"
              size={22}
              color="#181a20"
            />
          </BarberInformation>
          <Details>
            <ContentDetails>
              <Icon name="star" size={28} color="#f4972e" />
              <DetailsText>{barber.rating}</DetailsText>
            </ContentDetails>
            <ContentDetails>
              <Icon name="usd" size={28} color="#181a20" />
              <Icon name="usd" size={28} color="#181a20" />
              <Icon name="usd" size={28} color="#cccccc" />
            </ContentDetails>
            <ContentDetails>
              <Icon name="location-arrow" size={28} color="#181a20" />
              <DetailsText>1 km</DetailsText>
            </ContentDetails>
          </Details>
          <Schedules>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {SchedulesBarber.map((schedule: SchedulesBarber) => (
                <BtnAvalibleHours
                  key={schedule.id}
                  isFocused={isFocused === schedule.id}
                  onPress={() => handleInputFocus(schedule.id)}
                >
                  <HourText>{schedule.hour}</HourText>
                  <MeridianText>{schedule.meridian}</MeridianText>
                </BtnAvalibleHours>
              ))}
            </ScrollView>
          </Schedules>
        </BarberContent>
      ))}
    </>
  );
};

export default BarberFeed;
