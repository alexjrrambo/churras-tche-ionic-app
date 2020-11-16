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

const initialPurchaseList = {      
  carnes: 0,
  bebidasCerveja: 0,
  bebidasRefriSuco: 0,
};

const Simulacao: React.FC = () => {
  const [invitedList, setInvitedList] = useState(initialState);
  const [purchasesList, setPurchasesList] = useState(initialPurchaseList);

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

  const handleSimulation = () => {
    const [homens, mulheres, criancas] = invitedList;

    const carnes = (homens.amount * 0.7) + (mulheres.amount * 0.5) + (criancas.amount * 0.3);
    const bebidasCerveja = (homens.amount * 2.5) + (mulheres.amount * 2);
    const bebidasRefriSuco = (homens.amount * 0.5) + (mulheres.amount * 0.5) + (criancas.amount * 0.5);

    console.log(carnes, bebidasCerveja, bebidasRefriSuco)
    const purchasesList = {
      carnes,
      bebidasCerveja,
      bebidasRefriSuco,
    };
    setPurchasesList(purchasesList);
  }

  return (
    <IonPage>
      <Header />
      <IonContent fullscreen>
        <Container>
          {
            purchasesList.carnes > 0 ? (
            <>
              <Card title="Lista de compras">
                <ContentItem>
                  <h2>CARNES</h2>
                  <div>
                    <IonIcon icon={removeCircleOutline}></IonIcon>
                    <IonLabel>{purchasesList.carnes.toFixed(2)} kgs</IonLabel>
                    <IonIcon icon={addCircleOutline}></IonIcon>
                  </div>
                </ContentItem>
                <ContentItem>
                  <h2>Cerveja</h2>
                  <div>
                    <IonIcon icon={removeCircleOutline}></IonIcon>
                    <IonLabel>{purchasesList.bebidasCerveja.toFixed(2)} litros</IonLabel>
                    <IonIcon icon={addCircleOutline}></IonIcon>
                  </div>
                </ContentItem>
                <ContentItem>
                  <h2>Refrigerante/suco</h2>
                  <div>
                    <IonIcon icon={removeCircleOutline}></IonIcon>
                    <IonLabel>{purchasesList.bebidasRefriSuco.toFixed(2)} litros</IonLabel>
                    <IonIcon icon={addCircleOutline}></IonIcon>
                  </div>
                </ContentItem>                
                
                <IonButton expand="block" onClick={()=> setPurchasesList(initialPurchaseList)}>Voltar</IonButton>
              </Card>
            </>
            ) : 
            (<>
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
                <IonButton expand="block" onClick={handleSimulation}>CALCULAR</IonButton>
              </Card>
            </>)
        }
        </Container>
      </IonContent>
    </IonPage>
  );
};

export default Simulacao;
