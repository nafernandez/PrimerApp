import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React, { useEffect, useState } from 'react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';

const Home: React.FC = () => {

  const [input, setInput] = useState<string>("");

  useEffect(()=>{
    console.log(input);
  }, [input]);
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Hola, bienvenido a la pagina de inicio de sesión!</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="ion-padding">
            <IonButton routerLink="/login">Login</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Home;
