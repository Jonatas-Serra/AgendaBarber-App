import React from 'react';
import { ScrollView, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import Icon2 from 'react-native-vector-icons/dist/MaterialCommunityIcons';

import Button from '../Button';

import {
  Container,
  Header,
  Title,
  Description,
  DescriptionText,
  DescriptionTextTime,
  Datails,
  DetailText,
  Rwbtn,
  BtnHours,
  BtnHoursText,
  BtnHoursMeridian,
  Prices,
  Title2,
  RwServices,
  ContentServices,
  ServiceText,
  DescriptionIcon,
  DatailsContent,
  Photos,
  ArticleHeader,
  Title3,
  Reviews,
  Carrousel,
  Score,
  Nreviews,
  Rate,
  DetailsRate,
  Footer,
} from './styles';

const Barber: React.FC = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Container>
        <Header>
          <Title>Nood Barber Club</Title>
          <Description>
            <DescriptionText>
              Av. Navegantes, 700 •
              <DescriptionTextTime> 10 min.</DescriptionTextTime>
            </DescriptionText>
            <DescriptionIcon>
              <Icon2 name="walk" size={24} color="#88888b" />
            </DescriptionIcon>
          </Description>
        </Header>
        <Datails>
          <DatailsContent>
            <Icon name="star" size={20} color="#f4972e" />
            <DetailText>4.9</DetailText>
          </DatailsContent>
          <DatailsContent>
            <Icon name="usd" size={20} color="#181a20" />
            <Icon name="usd" size={20} color="#181a20" />
            <Icon name="usd" size={20} color="#cccccc" />
          </DatailsContent>
          <DatailsContent>
            <Icon name="location-arrow" size={20} color="#88888b" />
            <DetailText>1,5 km</DetailText>
          </DatailsContent>
        </Datails>
        <Rwbtn>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <BtnHours>
              <BtnHoursText>11:00</BtnHoursText>
              <BtnHoursMeridian>AM</BtnHoursMeridian>
            </BtnHours>
            <BtnHours>
              <BtnHoursText>12:00</BtnHoursText>
              <BtnHoursMeridian>PM</BtnHoursMeridian>
            </BtnHours>
            <BtnHours>
              <BtnHoursText>13:00</BtnHoursText>
              <BtnHoursMeridian>PM</BtnHoursMeridian>
            </BtnHours>
            <BtnHours>
              <BtnHoursText>14:00</BtnHoursText>
              <BtnHoursMeridian>PM</BtnHoursMeridian>
            </BtnHours>
            <BtnHours>
              <BtnHoursText>15:00</BtnHoursText>
              <BtnHoursMeridian>PM</BtnHoursMeridian>
            </BtnHours>
            <BtnHours>
              <BtnHoursText>16:00</BtnHoursText>
              <BtnHoursMeridian>PM</BtnHoursMeridian>
            </BtnHours>
          </ScrollView>
        </Rwbtn>
        <Prices>
          <Title2>Preços</Title2>
          <RwServices>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <ContentServices>
                <Image
                  source={{
                    uri: 'https://images.unsplash.com/photo-1541533848490-bc8115cd6522?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80',
                  }}
                  style={{ borderRadius: 15, width: 130, height: 130 }}
                />
                <ServiceText>Corte</ServiceText>
                <DetailText>R$ 30</DetailText>
              </ContentServices>
              <ContentServices>
                <Image
                  source={{
                    uri: 'https://images.unsplash.com/photo-1517832606299-7ae9b720a186?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80',
                  }}
                  style={{ borderRadius: 15, width: 130, height: 130 }}
                />
                <ServiceText>Barba</ServiceText>
                <DetailText>R$ 20</DetailText>
              </ContentServices>
              <ContentServices>
                <Image
                  source={{
                    uri: 'https://blog.vonbarbarov.com.br/wp-content/uploads/2021/02/Sobrancelha-Masculina-Barbarov.png',
                  }}
                  style={{ borderRadius: 15, width: 130, height: 130 }}
                />
                <ServiceText>Sobrancelha</ServiceText>
                <DetailText>R$ 15</DetailText>
              </ContentServices>
              <ContentServices>
                <Image
                  source={{
                    uri: 'https://static.ndmais.com.br/2020/01/Claudio-Gomes-Cliente-Boaz-Bezerra-Barbeiro-Barbearia-Vip_Cuidados-para-a-barba-e-cabelo-no-verão_Anderson-Coelho_8641-800x533.jpg',
                  }}
                  style={{ borderRadius: 15, width: 130, height: 130 }}
                />
                <ServiceText>Massagem </ServiceText>
                <DetailText>R$ 20</DetailText>
              </ContentServices>
            </ScrollView>
          </RwServices>
        </Prices>
        <Photos>
          <ArticleHeader>
            <Title2>Fotos</Title2>
            <TouchableOpacity style={{ padding: 20 }}>
              <Title3>Ver todas</Title3>
            </TouchableOpacity>
          </ArticleHeader>
          <Carrousel>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <Image
                source={{
                  uri: 'https://images.unsplash.com/photo-1541533848490-bc8115cd6522?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80',
                }}
                style={{
                  borderRadius: 15,
                  width: 310,
                  height: 200,
                  marginRight: 10,
                }}
              />
              <Image
                source={{
                  uri: 'https://images.unsplash.com/photo-1541533848490-bc8115cd6522?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80',
                }}
                style={{
                  borderRadius: 15,
                  width: 310,
                  height: 200,
                  marginRight: 10,
                }}
              />
              <Image
                source={{
                  uri: 'https://images.unsplash.com/photo-1541533848490-bc8115cd6522?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80',
                }}
                style={{
                  borderRadius: 15,
                  width: 310,
                  height: 200,
                  marginRight: 10,
                }}
              />
              <Image
                source={{
                  uri: 'https://images.unsplash.com/photo-1541533848490-bc8115cd6522?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80',
                }}
                style={{
                  borderRadius: 15,
                  width: 310,
                  height: 200,
                  marginRight: 10,
                }}
              />
            </ScrollView>
          </Carrousel>
        </Photos>
        <Reviews>
          <ArticleHeader>
            <Title2>Avaliações e reviews</Title2>
            <TouchableOpacity style={{ padding: 20 }}>
              <Title3>Ver todas</Title3>
            </TouchableOpacity>
          </ArticleHeader>
          <DatailsContent>
            <Icon name="star" size={40} color="#f4972e" />
            <Score>4,9</Score>
            <Nreviews>51 avaliações</Nreviews>
          </DatailsContent>
        </Reviews>
        <Rate>
          <Title2>Já esteve aqui? </Title2>
          <DetailsRate>
            <Icon name="star-o" size={45} color="#f4972e" />
            <Icon name="star-o" size={45} color="#f4972e" />
            <Icon name="star-o" size={45} color="#f4972e" />
            <Icon name="star-o" size={45} color="#f4972e" />
            <Icon name="star-o" size={45} color="#f4972e" />
          </DetailsRate>
        </Rate>
        <Footer>
          <Button style={{ width: '100%' }}>Agendar</Button>
        </Footer>
      </Container>
    </ScrollView>
  );
};

export default Barber;
