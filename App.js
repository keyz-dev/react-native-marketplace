import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Main from './src/Main';
import { Provider } from 'react-redux';
import { StripeProvider } from '@stripe/stripe-react-native';
import { store } from './src/stateManagement/store';
import { colors } from './src/styles/style';

export default function App() {

  const publishableKey =
    'pk_test_51JTFjTSBJxYHREkUpzfarxCYkdDN171AiVJimDtmzXFVm5Wzpr1bvEfqNWTagB0H1JsszEwSJ0gM7gLrnBL7DD9P00Nq86FLbO';
  return (

    <Provider store={store}>
      <Main />
      <StatusBar backgroundColor={colors.color1} />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
