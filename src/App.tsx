import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { bookmark, bookmarks, cart, logIn, logInOutline, person, square } from 'ionicons/icons';
import Tab1 from './pages/Tabs/Tab1';
import Tab2 from './pages/Tabs/Tab2';
import Tab3 from './pages/Tabs/Tab3';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/**
 * Ionic Dark Mode
 * -----------------------------------------------------
 * For more info, please see:
 * https://ionicframework.com/docs/theming/dark-mode
 */

/* import '@ionic/react/css/palettes/dark.always.css'; */
/* import '@ionic/react/css/palettes/dark.class.css'; */
import '@ionic/react/css/palettes/dark.system.css';

/* Theme variables */
import './theme/variables.css';
import { Wishlist } from './components/Wishlist/Wishlist';
import useUserState from './stores/useUserStore';
import Register from "./pages/Auth/Register";
import Products from './components/Products/Products';
import Login from './pages/Auth/Login';
import { Profile } from './pages/Auth/Profile';

setupIonicReact();

const App: React.FC = () => {
  const { user } = useUserState();
  return (
    <IonApp>
      <IonReactRouter>
        <IonTabs>
          <IonRouterOutlet>
            <Route exact path="/products">
              <Tab1 />
            </Route>
            <Route exact path="/wishlist">
              <Wishlist />
            </Route>
            <Route path="/login">
              {user != null ? <Wishlist /> : <Redirect to="/login" />}
              <Login />
            </Route>
            <Route exact path="/profile">
              {user != null ? <Profile /> : <Redirect to="/login" />}
            </Route>
            <Route exact path="/register">
              <Register />
            </Route>
            <Route exact path="/">
              <Redirect to="/products" />
            </Route>
          </IonRouterOutlet>
          <IonTabBar slot="bottom">
            <IonTabButton tab="products" href="/products">
              <IonIcon aria-hidden="true" icon={cart} />
              <IonLabel>Products</IonLabel>
            </IonTabButton>
            <IonTabButton tab="wishlist" href="/wishlist">
              <IonIcon aria-hidden="true" icon={bookmarks} />
              <IonLabel>Wishlist</IonLabel>
            </IonTabButton>
            <IonTabButton tab="profile" href={user ? "/profile" : "/login"}>
              <IonIcon aria-hidden="true" icon={user ? person : logIn} />
              <IonLabel>{user ? "Perfil" : "Iniciar sesión"}</IonLabel>
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
