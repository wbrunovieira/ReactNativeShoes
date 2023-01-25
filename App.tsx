import { StatusBar } from 'react-native';
import OneSignal from 'react-native-onesignal';
import { NativeBaseProvider } from 'native-base';
import { tagUserEmailCreate } from './src/notifications/notificationsTags';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';

import { Routes } from './src/routes';

import { THEME } from './src/theme';
import { Loading } from './src/components/Loading';

import { CartContextProvider } from './src/contexts/CartContext';

OneSignal.setAppId('570a1972-0dc8-49f2-b1af-e65700301043')


OneSignal.promptForPushNotificationsWithUserResponse(response => {
  console.log(response);
})

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  tagUserEmailCreate('rennan.douglas@rocketseat.team');

  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <CartContextProvider>
        {fontsLoaded ? <Routes /> : <Loading />}
      </CartContextProvider>
    </NativeBaseProvider>
  );
}