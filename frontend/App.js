import { StatusBar } from 'expo-status-bar';
import Main from './src/Main';
import { StripeProvider } from '@stripe/stripe-react-native';
import {useFonts} from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback } from 'react';
import AppProviders from "./src/stateManagement/AppProviders";


export default function App() {

  const [fontsLoaded] = useFonts({
    'regular': require('./src/assets/fonts/Poppins-Regular.ttf'),
    'bold': require('./src/assets/fonts/Poppins-Bold.ttf'),
    'medium': require('./src/assets/fonts/Poppins-Medium.ttf'),
    'semibold': require('./src/assets/fonts/Poppins-SemiBold.ttf'),
    'light': require('./src/assets/fonts/Poppins-Light.ttf'),
    'extrabold': require('./src/assets/fonts/Poppins-ExtraBold.ttf'),
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
      <AppProviders>
        <Main />
        <StatusBar style='auto' />
      </AppProviders>
    </StripeProvider>
  );
}
