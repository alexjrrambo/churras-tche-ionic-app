import React, { useState } from 'react';
import { 
  IonButton,
  IonContent, 
  IonInput, 
  IonItem, 
  IonLabel, 
  IonPage,
  IonToast, 
} from '@ionic/react';
import Card from '../../components/Card';
import { LoginContainer, LoginContent } from './styles';
import Logo from '../../assets/images/logo.png';
import { useHistory } from 'react-router';
import { DataBaseProvider } from '../../services/firebaseDatabase';
import { User } from '../../models/user';

const Registrar: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  
  let history = useHistory();

  const showToastHandler = (message: string) => {
    setToastMessage(message);
    setShowToast(true);
  }

  const removeToastHandler = () => {
    setShowToast(false);
    history.push('/main/simulacao');
  }

  const handleRegister = () => {
    const fbDatabase = new DataBaseProvider();
    const newUser = new User();

    newUser.email = email;
    newUser.nome = name;
    newUser.senha = password;

    fbDatabase.registrateUser(newUser);
    showToastHandler('Registro criado com sucesso');
  }

  return (
    <IonPage>
      <IonContent fullscreen>
        <LoginContainer>
        <img src={Logo} alt="logo churrasTchê"/>
          <Card>
            <LoginContent>
              <IonLabel><b>Registrar-se no churrasTchê</b></IonLabel>
              <IonItem>
                <IonInput type="text" value={name} onIonInput={(e: any) => setName(e.target.value)} placeholder="Nome"></IonInput>
              </IonItem>
              <IonItem>
                <IonInput type="email" value={email} onIonInput={(e: any) => setEmail(e.target.value)} placeholder="E-mail"></IonInput>
              </IonItem>
              <IonItem>
                <IonInput type="password" value={password} onIonInput={(e: any) => setPassword(e.target.value)} placeholder="Senha"></IonInput>
              </IonItem>
              <IonButton onClick={handleRegister} expand="block">Finalizar cadastro</IonButton>              
            </LoginContent>
          </Card>          
        </LoginContainer>
      </IonContent>
      <IonToast
        isOpen={showToast}
        onDidDismiss={removeToastHandler}
        message={toastMessage}
        duration={200}
      />
    </IonPage>
  );
};

export default Registrar;
