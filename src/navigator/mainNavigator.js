import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import ArticleList49974Navigator from '../features/ArticleList49974/navigator';
import ArticleList49973Navigator from '../features/ArticleList49973/navigator';
import ArticleList49972Navigator from '../features/ArticleList49972/navigator';
import ArticleList49940Navigator from '../features/ArticleList49940/navigator';
import ArticleList49939Navigator from '../features/ArticleList49939/navigator';
import ArticleList49938Navigator from '../features/ArticleList49938/navigator';
import MessengerNavigator from '../features/Messenger/navigator';
import TutorialNavigator from '../features/Tutorial/navigator';
import MapsNavigator from '../features/Maps/navigator';
import CalendarNavigator from '../features/Calendar/navigator';
import CameraNavigator from '../features/Camera/navigator';
import EmailAuthNavigator from '../features/EmailAuth/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
    SplashScreen: {
      screen: SplashScreen
    },
    //@BlueprintNavigationInsertion
ArticleList49974: { screen: ArticleList49974Navigator },
ArticleList49973: { screen: ArticleList49973Navigator },
ArticleList49972: { screen: ArticleList49972Navigator },
ArticleList49940: { screen: ArticleList49940Navigator },
ArticleList49939: { screen: ArticleList49939Navigator },
ArticleList49938: { screen: ArticleList49938Navigator },
Messenger: { screen: MessengerNavigator },
Tutorial: { screen: TutorialNavigator },
Maps: { screen: MapsNavigator },
Calendar: { screen: CalendarNavigator },
Camera: { screen: CameraNavigator },
EmailAuth: { screen: EmailAuthNavigator },

    /** new navigators can be added here */
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu,
    initialRouteName: 'SplashScreen',
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
