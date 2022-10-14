import React from 'react';
import TabMenu from '../../components/TabMenu';

import {
  Container,
  Title,
  Header,
  ContentBtn,
  Btn,
  BtnText,
  Content,
  Apointments,
  ApointmentContent,
  ApointmentContentPrice,
  ApointmentTitle,
  ApointmentPrice,
  ApointmentDescription,
} from './styles';

const Apointment: React.FC = () => {
  const [isActiveBtn1, setIsActiveBtn1] = React.useState(true);
  const [isActiveBtn2, setIsActiveBtn2] = React.useState(false);
  const [isPast, setIsPast] = React.useState(true);
  const [isPast2, setIsPast2] = React.useState(false);
  return (
    <>
      <Container>
        <Header>
          <Title>Agendamentos</Title>
        </Header>
        <ContentBtn>
          <Btn
            active={isActiveBtn1}
            onPress={() => {
              setIsActiveBtn1(true);
              setIsActiveBtn2(false);
              setIsPast(true);
              setIsPast2(false);
            }}
          >
            <BtnText>Em aberto</BtnText>
          </Btn>
          <Btn
            active={isActiveBtn2}
            onPress={() => {
              setIsActiveBtn1(false);
              setIsActiveBtn2(true);
              setIsPast(false);
              setIsPast2(true);
            }}
          >
            <BtnText>Concluídos</BtnText>
          </Btn>
        </ContentBtn>
        <Content>
          <Apointments past={isPast} bgPast={false}>
            <ApointmentContent>
              <ApointmentTitle> 31 de Agosto às 12:00</ApointmentTitle>
              <ApointmentDescription>Barbeiro: Mbappé</ApointmentDescription>
              <ApointmentDescription>
                Serviço: Corte Navalhado
              </ApointmentDescription>
              <ApointmentDescription>
                Endereço: Av. Navegantes
              </ApointmentDescription>
            </ApointmentContent>
            <ApointmentContentPrice>
              <ApointmentPrice>R$ 100</ApointmentPrice>
            </ApointmentContentPrice>
          </Apointments>
          <Apointments past={isPast} bgPast={false}>
            <ApointmentContent>
              <ApointmentTitle> 05 de Setembro às 17:00</ApointmentTitle>
              <ApointmentDescription>Barbeiro: Mbappé</ApointmentDescription>
              <ApointmentDescription>
                Serviço: Sobrancelha
              </ApointmentDescription>
              <ApointmentDescription>
                Endereço: Av. Navegantes
              </ApointmentDescription>
            </ApointmentContent>
            <ApointmentContentPrice>
              <ApointmentPrice>R$ 40</ApointmentPrice>
            </ApointmentContentPrice>
          </Apointments>
          <Apointments past={isPast2} bgPast>
            <ApointmentContent>
              <ApointmentTitle> 05 de Agosto às 14:00</ApointmentTitle>
              <ApointmentDescription>Barbeiro: Mbappé</ApointmentDescription>
              <ApointmentDescription>
                Serviço: Corte e Barba
              </ApointmentDescription>
              <ApointmentDescription>
                Endereço: Av. Navegantes
              </ApointmentDescription>
            </ApointmentContent>
            <ApointmentContentPrice>
              <ApointmentPrice>R$ 110</ApointmentPrice>
            </ApointmentContentPrice>
          </Apointments>
        </Content>
      </Container>
      <TabMenu />
    </>
  );
};

export default Apointment;
