import React from 'react';
import {
  IonApp,
  IonIcon,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { heartOutline, menuOutline, searchOutline } from 'ionicons/icons';
import TabRoutes from '../../routes';

const TabMenu: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <TabRoutes />
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="tab1" href="/main/simulacao">
            <IonIcon icon={searchOutline} />
          </IonTabButton>
          <IonTabButton tab="tab2" href="/main/favoritos">
            <IonIcon icon={heartOutline} />
          </IonTabButton>
          <IonTabButton tab="tab3" href="/main/menu">
            <IonIcon icon={menuOutline} />
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default TabMenu;
