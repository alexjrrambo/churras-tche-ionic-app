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
import { DataBaseProvider } from '../../../services/firebaseDatabase';

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
                {/* O correto seria utilizar uma store no redux para armazenar essas infos */}
                <IonLabel>{localStorage.getItem('@churrastche-app/name')}</IonLabel>
                <IonLabel>{localStorage.getItem('@churrastche-app/email')}</IonLabel>
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
