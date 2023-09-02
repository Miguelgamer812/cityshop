/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  Pressable,
  Modal,
  ScrollView,
  StatusBar,
  useColorScheme,
  View,
} from 'react-native';
import Formulario from './components/Formulario';
import Login from './components/login';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { enableScreens } from 'react-native-screens';
import 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import 'react-native-gesture-handler';

enableScreens();
const Stack = createStackNavigator();
const App = () => {
  //Aqui deben de ir los hooks
  // return (
  //   <SafeAreaProvider> {/* Envuelve con SafeAreaProvider */}
  //     <NavigationContainer>
  //       <Stack.Navigator>
  //         <Stack.Screen name="Login" component={Login} />
  //         <Stack.Screen name="Formulario" component={Formulario} />
  //       </Stack.Navigator>
  //     </NavigationContainer>
  //   </SafeAreaProvider>

  // );
  const [modalVisible, setModalVisible] = useState(false)

  const cerrarModal = () => {
    setModalVisible(false)
  }
  return (
    <SafeAreaView style={style.contains}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Formulario" component={Formulario} />
        </Stack.Navigator>

        {/* <Text style={style.title}>Administración de {' '}</Text>
        <Text style={style.title}>veterinaria</Text>

        <Pressable
          style={style.btnNuevaCita}
          onPress={() => setModalVisible(!modalVisible)}
        >
          <Text
            style={style.btnTextoNuevaCita}>
            Este es un boton</Text>
        </Pressable>

        <Formulario
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
        /> */}
      </NavigationContainer>

    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  contains: {
    backgroundColor: '#F3F4F6',
    flex: 1
  },
  title: {
    fontSize: 25,
    color: '#5195FF',
    textAlign: 'center',
  },
  label: {
    color: '#5195FF',
    marginBottom: 10,
    marginTop: 15,
    fontSize: 20,
    fontWeight: '600'
  },
  campo: {
    marginTop: 10,
    marginHorizontal: 30,
  },
  input: {
    backgroundColor: '#FFFF',
    padding: 15,
    borderRadius: 10
  },

  btnNuevaCita: {

  },
  btnTextoNuevaCita: {

  }
});
export default App;
//------------------------------------------------------------------------------------
// import React from 'react';
// import type { PropsWithChildren } from 'react';
// import {
//   SafeAreaView,
//   ScrollView,
//   StatusBar,
//   StyleSheet,
//   Text,
//   useColorScheme,
//   View,
// } from 'react-native';

// import {
//   Colors,
//   DebugInstructions,
//   Header,
//   LearnMoreLinks,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';

// type SectionProps = PropsWithChildren<{
//   title: string;
// }>;

// function Section({ children, title }: SectionProps): JSX.Element {
//   const isDarkMode = useColorScheme() === 'dark';
//   return (
//     <View style={styles.sectionContainer}>
//       <Text
//         style={[
//           styles.sectionTitle,
//           {
//             color: isDarkMode ? Colors.white : Colors.black,
//           },
//         ]}>
//         {title}
//       </Text>
//       <Text
//         style={[
//           styles.sectionDescription,
//           {
//             color: isDarkMode ? Colors.light : Colors.dark,
//           },
//         ]}>
//         {children}
//       </Text>
//     </View>
//   );
// }

// function App(): JSX.Element {
//   const isDarkMode = useColorScheme() === 'dark';

//   const backgroundStyle = {
//     backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
//   };

//   return (
//     <SafeAreaView style={backgroundStyle}>
//       <StatusBar
//         barStyle={isDarkMode ? 'light-content' : 'dark-content'}
//         backgroundColor={backgroundStyle.backgroundColor}
//       />
//       <ScrollView
//         contentInsetAdjustmentBehavior="automatic"
//         style={backgroundStyle}>
//         <Header />
//         <View
//           style={{
//             backgroundColor: isDarkMode ? Colors.black : Colors.white,
//           }}>
//           <Section title="Step One">
//             Edit <Text style={styles.highlight}>App.tsx</Text> to change this
//             screen and then come back to see your edits.
//           </Section>
//           <Section title="See Your Changes">
//             <ReloadInstructions />
//           </Section>
//           <Section title="Debug">
//             <DebugInstructions />
//           </Section>
//           <Section title="Learn More">
//             Read the docs to discover what to do next:
//           </Section>
//           <LearnMoreLinks />
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//   },
//   highlight: {
//     fontWeight: '700',
//   },
// });

// export default App;
