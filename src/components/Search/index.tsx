import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { View, Text, ScrollView } from 'react-native';

import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import {
  Container,
  TextInput,
  Header,
  ContentSearch,
  BarberSearch,
  Details,
  ContentDetails,
  DetailsText,
} from './styles';

import { Barbers } from '../../models/Barbers';

interface Barbers {
  id: number;
  name: string;
  address: string;
  photo: string;
  phone: string;
  rating: number;
}

const Search: React.FC = () => {
  const [search, setSearch] = useState('');
  return (
    <Container>
      <Header>
        <TextInput
          placeholder="Pesquise por uma barbearia"
          value={search}
          onChangeText={(text) => setSearch(text)}
        />
      </Header>
      <ScrollView>
        <ContentSearch>
          {Barbers.filter((barber: Barbers) =>
            barber.name.includes(search),
          ).map((barber: Barbers) => (
            <BarberSearch key={barber.id}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  width: '100%',
                }}
              >
                <View style={{ flexDirection: 'column' }}>
                  <DetailsText>{barber.name}</DetailsText>
                  <Text
                    style={{
                      fontFamily: 'RobotoSlab-Medium',
                      paddingLeft: 12,
                    }}
                  >
                    {barber.address}{' '}
                    <Text
                      style={{
                        fontFamily: 'RobotoSlab-ExtraBold',
                        color: '#181a20',
                      }}
                    >
                      {' '}
                      45 min.
                    </Text>
                  </Text>
                </View>
                <View style={{ flexDirection: 'column' }}>
                  <TouchableWithoutFeedback>
                    <Icon name="angle-right" size={28} color="#181a20" />
                  </TouchableWithoutFeedback>
                </View>
              </View>
              <Details>
                <ContentDetails>
                  <Icon name="star" size={16} color="#f4972e" />
                  <DetailsText>{barber.rating}</DetailsText>
                </ContentDetails>
                <ContentDetails>
                  <Icon name="usd" size={16} color="#181a20" />
                  <Icon name="usd" size={16} color="#181a20" />
                  <Icon name="usd" size={16} color="#cccccc" />
                </ContentDetails>
                <ContentDetails>
                  <Icon name="location-arrow" size={16} color="#181a20" />
                  <DetailsText>1 km</DetailsText>
                </ContentDetails>
              </Details>
            </BarberSearch>
          ))}
        </ContentSearch>
      </ScrollView>
    </Container>
  );
};

export default Search;
