import '../Home/Home.css';
import Products from '../Products/Products';

import Tab1 from '../../pages/Tabs/Tab1';
import { IonSearchbar } from '@ionic/react';

interface ContainerProps { }

const ExploreContainer: React.FC<ContainerProps> = () => {
  return (
    <div id="container">
      <IonSearchbar animated={true} placeholder='Search'></IonSearchbar>
      <Products />
    </div>
  );
};

export default ExploreContainer;
