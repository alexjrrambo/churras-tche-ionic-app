import React from 'react';
import { 
  IonButton,
  IonContent, 
  IonLabel, 
  IonPage, 
} from '@ionic/react';
import Header from '../../../components/Header';
import Card from '../../../components/Card';
import { Container } from '../../layout';
import { AvatarContainer, AvatarImage, AvatarInfo } from './styles';

const Menu: React.FC = () => {
  const handleLogout = () => {
    window.location.href = '/login';
  }

  return (
    <IonPage>
      <Header />
      <IonContent fullscreen>
        <Container>
          <Card>
            <AvatarContainer>
              <AvatarImage />
              <AvatarInfo>
                <IonLabel>Alex Jr Rambo</IonLabel>
                <IonLabel>alexjr.rambo@gmail.com</IonLabel>
              </AvatarInfo>
            </AvatarContainer>
          </Card>
          <IonButton onClick={handleLogout} expand="block">Sair</IonButton>
        </Container>
      </IonContent>
    </IonPage>
  );
};

export default Menu;
