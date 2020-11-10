import React, { useState } from 'react';
import { IonButton, IonContent, IonPage, IonIcon, IonLabel } from '@ionic/react';
import { addCircleOutline, removeCircleOutline } from 'ionicons/icons';
import { DescriptionContent, ContentItem, } from './styles';
import Header from '../../../components/Header';
import Card from '../../../components/Card';
import { Container } from '../../layout';

const initialState = [
  {
    title: 'HOMENS',
    amount: 0
  },
  {
    title: 'MULHERES',
    amount: 0
  },
  {
    title: 'CRIANÇAS',
    amount: 0
  }
]

const Simulacao: React.FC = () => {
  const [invitedList, setInvitedList] = useState(initialState);

  const addGuest = (index: number) => {
    const newInvitedList = [...invitedList];
    newInvitedList[index].amount = invitedList[index].amount + 1;

    setInvitedList(newInvitedList);
  };

  const removeGuest = (index: number) => {
    if (invitedList[index].amount > 0) {
      const newInvitedList = [...invitedList];
      newInvitedList[index].amount = invitedList[index].amount - 1;

      setInvitedList(newInvitedList);
    }
  };

  return (
    <IonPage>
      <Header />
      <IonContent fullscreen>
        <Container>
          <DescriptionContent>
            <h4>Quer fazer um churrasco e não sabe o que comprar?<br/>O <b>churrasTchê</b> te ajuda :)</h4>
          </DescriptionContent>
            <Card title="Quantas pessoas participarão do churras?">
              {invitedList.map((invitedItem, index) => (
                <ContentItem>
                  <h2>{invitedItem.title}</h2>
                  <div>
                    <IonIcon onClick={() => removeGuest(index)} icon={removeCircleOutline}></IonIcon>
                    <IonLabel>{invitedItem.amount}</IonLabel>
                    <IonIcon onClick={() => addGuest(index)} icon={addCircleOutline}></IonIcon>                      
                  </div>
                </ContentItem>
              ))}
              <IonButton expand="block">CALCULAR</IonButton>
            </Card>
        </Container>
      </IonContent>
    </IonPage>
  );
};

export default Simulacao;
