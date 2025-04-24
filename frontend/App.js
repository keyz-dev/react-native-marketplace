import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Main from './src/Main';
import { Provider } from 'react-redux';
import { StripeProvider } from '@stripe/stripe-react-native';
import { store } from './src/stateManagement/store';
import { colors } from './src/styles/style';
import {useFonts} from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback } from 'react';


export default function App() {

  const [fontsLoaded] = useFonts({
    'regular': require('./assets/fonts/Poppins-Regular.ttf'),
    'bold': require('./assets/fonts/Poppins-Bold.ttf'),
    'medium': require('./assets/fonts/Poppins-Medium.ttf'),
    'semibold': require('./assets/fonts/Poppins-SemiBold.ttf'),
    'light': require('./assets/fonts/Poppins-Light.ttf'),
    'extrabold': require('./assets/fonts/Poppins-ExtraBold.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  const publishableKey =
    'pk_test_51JTFjTSBJxYHREkUpzfarxCYkdDN171AiVJimDtmzXFVm5Wzpr1bvEfqNWTagB0H1JsszEwSJ0gM7gLrnBL7DD9P00Nq86FLbO';
  return (
    <StripeProvider
      publishableKey={publishableKey}
      merchantIdentifier='MD-Shop' // required for Apple Pay
      threeDSecureParams={{
        backgroundColor: '#fff',
        timeout: 5,
      }}
    >
      <Provider store={store}>
        <Main />
        <StatusBar style='auto' />
      </Provider>
    </StripeProvider>
  );
}
