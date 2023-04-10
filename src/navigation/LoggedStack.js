import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import CustomDrawer from '../components/CustomDrawer';

import { colors } from '../styles';

import Header from '../components/Layout/Header';
import Dashboard from '../screens/Dashboard';
import Perfil from '../screens/Perfil';
import Clients from '../screens/Clients';
import QuotationMount from '../screens/QuotationMount';
import Quotations from '../screens/Quotations';
import Configurations from '../screens/Configurations';
import Outhers from '../screens/Outhers';
import FeedProvider from '../contexts/FeedContext';

const Drawer = createDrawerNavigator();

const config = {
  animation: 'timing',
  config: {
    duration: 0,
  },
};

const titleOptions = (title, props) => ({
  header: () => (
    <>
      <Header title={title} {...props} />
    </>
  ),
  headerStyle: {
    backgroundColor: colors.primary300,
  },
  headerTintColor: colors.light,
  headerTitleStyle: {
    fontWeight: 'bold',
    color: colors.light,
  },
  transitionSpec: {
    open: config,
    close: config,
  },
})

const ComponentDashboard = (navigation, props) => (
  <FeedProvider>
    <Dashboard {...props}  {...navigation} />
  </FeedProvider>
)

export default function LoggedStack() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: true,
        drawerPosition: 'right',
        drawerStyle: {
          backgroundColor: colors.light,
          // width: 100,
        },
      }}
      initialRouteName="Dashboard"
      drawerContent={(props) => <CustomDrawer {...props} />}
    >
      <Drawer.Screen
        name="Dashboard"
        component={ComponentDashboard}
        options={(props) => titleOptions('Home', props)}
      />

      <Drawer.Screen
        name="Perfil"
        component={Perfil}
        options={(props) => titleOptions('Perfil', props)}
      />

      <Drawer.Screen
        name="Clients"
        component={Clients}
        options={(props) => titleOptions('Clientes', props)}
      />

      <Drawer.Screen
        name="QuotationMount"
        component={QuotationMount}
        options={(props) => titleOptions('Montar Cotações', props)}
      />

      <Drawer.Screen
        name="Quotations"
        component={Quotations}
        options={(props) => titleOptions('Cotações', props)}
      />

      <Drawer.Screen
        name="Configurations"
        component={Configurations}
        options={(props) => titleOptions('Configurações', props)}
      />

      <Drawer.Screen
        name="Outhers"
        component={Outhers}
        options={{
          transitionSpec: {
            open: config,
            close: config,
          },
        }}
      />
    </Drawer.Navigator>
  );
}
