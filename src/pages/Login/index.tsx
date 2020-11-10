import React, { useState } from 'react';
import { 
  IonButton,
  IonContent, 
  IonInput, 
  IonItem, 
  IonLabel, 
  IonPage, 
} from '@ionic/react';
import Card from '../../components/Card';
import { LoginContainer, LoginContent } from './styles';
import Logo from '../../assets/images/logo.png';
import { useHistory } from 'react-router';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  let history = useHistory();

  const handleLogin = () => {
    history.push('/main/simulacao');
  }

  return (
    <IonPage>
      <IonContent fullscreen>
        <LoginContainer>
        <img src={Logo} alt="logo churrasTchê"/>
          <Card>
            <LoginContent>
              <IonLabel><b>Entrar no churrasTchê</b></IonLabel>
              <IonItem>
                <IonInput type="email" value={email} onIonInput={(e: any) => setEmail(e.target.value)} placeholder="E-mail"></IonInput>
              </IonItem>
              <IonItem>
                <IonInput type="password" value={password} onIonInput={(e: any) => setPassword(e.target.value)} placeholder="Senha"></IonInput>
              </IonItem>
              <IonButton onClick={handleLogin} expand="block">Entrar</IonButton>
            </LoginContent>
          </Card>          
        </LoginContainer>
      </IonContent>
    </IonPage>
  );
};

export default Login;
