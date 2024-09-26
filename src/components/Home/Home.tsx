import '../Home/Home.css';
import Products from '../Products/Products';
import { Product } from '../../stores/useProduct';

import Tab1 from '../../pages/Tabs/Tab1';
import { IonSearchbar } from '@ionic/react';
import useFilter from '../../hooks/useFilter';
import { useState } from 'react';


const ExploreContainer: React.FC = () => {

  const [products, setProducts] = useState<Product[]>([]);


  return (
    <div id="container">
      <IonSearchbar animated={true} placeholder='Search'></IonSearchbar>
      <Products
      />

    </div>
  );
};

export default ExploreContainer;
