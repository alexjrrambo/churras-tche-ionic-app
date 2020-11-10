import React from 'react';
import { 
  IonContent, 
  IonPage, 
} from '@ionic/react';
import Header from '../../components/Header';
import Card from '../../components/Card';
import { Container } from '../layout';

const Simulacao: React.FC = () => {
  return (
    <IonPage>
      <Header />
      <IonContent fullscreen>
        <Container>
          <Card title="Compras favoritas">
            <h1>LISTA DE FAVORITOS</h1>
          </Card>
        </Container>
      </IonContent>
    </IonPage>
  );
};

export default Simulacao;
