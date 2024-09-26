import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../../components/Home/Home';
import './Tab2.css';
import { Wishlist } from '../../components/Wishlist/Wishlist';

const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Wishlist</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Wishlist</IonTitle>
          </IonToolbar>
        </IonHeader>
        <Wishlist />
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
