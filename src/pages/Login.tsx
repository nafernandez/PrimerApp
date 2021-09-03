import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar,IonInput, IonLoading  } from '@ionic/react';
import React, { useEffect, useState } from 'react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';
import { loginUser } from '../firebaseConfig';
import { toast } from '../toast';


const Home: React.FC = () => {

    const [busy, setBusy] = useState<boolean>(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    
    async function login(){
        setBusy(true);
      const res = await loginUser(username, password);
      if(res){
        toast("Has podido ingresar!");
      }else{
        toast("No existe este usuario");
      }
      setBusy(false);
    };
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Login</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonLoading message="Espera un momento..." duration = {0} isOpen = {busy} />
      <IonContent fullscreen className = "ion-padding">
      <IonInput placeholder="Username?" onIonChange = {(e: any) => setUsername(e.target.value)}></IonInput>
      <IonInput type="password" placeholder="Password?" onIonChange = {(e: any) => setPassword(e.target.value)}></IonInput>
      <IonButton onClick={login}>Login</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Home;