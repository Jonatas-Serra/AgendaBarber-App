import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/Entypo';
import {
  ImageLibraryOptions,
  launchImageLibrary,
} from 'react-native-image-picker';
import { Alert } from 'react-native';
import TabMenu from '../../components/TabMenu';

import ProfImg from '../../assets/profile.jpg';

import { useAuth } from '../../hooks/Auth';

import {
  Container,
  Header,
  Title,
  ContentProfile,
  ContentProfileImage,
  Avatar,
  ProfileImageIcon,
  ProfileContentInformations,
  ProfileName,
  ProfileInformations,
  Content,
  Btn,
  BtnCam,
  BtnEditInfo,
  Footer,
} from './styles';

const Profile: React.FC = () => {
  const { signOut, user } = useAuth();

  const [imageUser, setImageUser] = useState(ProfImg);

  const pickImageFromGalery = async () => {
    const options: ImageLibraryOptions = {
      mediaType: 'photo',
    };

    const result = await launchImageLibrary(options);

    if (result?.assets) {
      setImageUser(result.assets);
    }
  };

  const handleUpdateAvatar = () => {
    Alert.alert(
      'Selecione uma opção',
      'Informe o tipo de imagem',
      [
        {
          text: 'Galeria',
          onPress: () => pickImageFromGalery(),
          style: 'default',
        },
      ],
      { cancelable: true },
    );
  };

  return (
    <>
      <Container>
        <Header>
          <Title>Meu perfil</Title>
        </Header>
        <ContentProfile>
          <ContentProfileImage>
            <Avatar source={imageUser} />
            <ProfileImageIcon>
              <BtnCam onPress={handleUpdateAvatar}>
                <Icon name="camera" size={20} color="#181a20" />
              </BtnCam>
            </ProfileImageIcon>
          </ContentProfileImage>
          <ProfileContentInformations>
            <ProfileName>{user.name}</ProfileName>
            <ProfileInformations> 55+ (73) 99153-6179 </ProfileInformations>
            <ProfileInformations>{user.email}</ProfileInformations>
          </ProfileContentInformations>
          <BtnEditInfo>
            <Icon name="edit" size={20} color="#181a20" />
          </BtnEditInfo>
        </ContentProfile>
        <Content>
          <Btn>
            <ProfileName>Avaliar Serviços</ProfileName>
          </Btn>
          <Btn>
            <ProfileName>Trocar senha</ProfileName>
          </Btn>
          <Btn onPress={() => signOut()}>
            <ProfileName>Logout</ProfileName>
          </Btn>
        </Content>
        <Footer>
          <Btn>
            <ProfileInformations>Tem duvidas?</ProfileInformations>
          </Btn>
          <Btn>
            <ProfileInformations>Sobre o app</ProfileInformations>
          </Btn>
        </Footer>
      </Container>
      <TabMenu />
    </>
  );
};

export default Profile;
