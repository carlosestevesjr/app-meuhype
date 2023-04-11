import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import React, { useCallback, useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './src/store';

import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import TradeGothic from './src/assets/fonts/TradeGothicLT.ttf';
import TradeGothicBold from './src/assets/fonts/TradeGothicLT-Bold.ttf';
import RobotoRegular from './src/assets/fonts/Roboto-Regular.ttf';
import RobotoBold from './src/assets/fonts/Roboto-Bold.ttf';

//Navigation
import { NavigationContainer } from '@react-navigation/native';
import Router from './src/navigation/Router';
import GlobalProvider from './src/contexts/GlobalContext';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#faf9f9',
  },
});

export default function App() {

  const [ appIsReady, setAppIsReady ] = useState(false);

  useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        await SplashScreen.preventAutoHideAsync();

        await Font.loadAsync({
          ...Ionicons.font,
          TradeGothic,
          TradeGothicBold,
          RobotoRegular,
          RobotoBold
        });
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      // This tells the splash screen to hide immediately! If we call this after
      // `setAppIsReady`, then we may see a blank screen while the app is
      // loading its initial state and rendering its first pixels. So instead,
      // we hide the splash screen once we know the root view has already
      // performed layout.
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      <StatusBar style="light" />
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <NavigationContainer>
            <GlobalProvider>
              <Router />
            </GlobalProvider>
          </NavigationContainer>
        </PersistGate>
      </Provider>
    </View>
  );
}
