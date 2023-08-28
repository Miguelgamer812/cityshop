import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  Pressable,
  Modal,
} from 'react-native';
import Formulario from './components/Formulario';
import Login from './components/login';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { enableScreens } from 'react-native-screens';
import 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
enableScreens();
const Stack = createStackNavigator();
const App = () => {
  //Aqui deben de ir los hooks
  return (
    <SafeAreaProvider> {/* Envuelve con SafeAreaProvider */}
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Formulario" component={Formulario} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>

  );
  // const [modalVisible, setModalVisible] = useState(false)

  // const cerrarModal = () => {
  //   setModalVisible(false)
  // } 
  //   return(
  //     <SafeAreaView style={style.contains}>
  //       <Text style={style.title}>Administración de {' '}</Text>
  //       <Text style={style.title}>veterinaria</Text>

  //       <Pressable
  //         style = {style.btnNuevaCita}
  //         onPress={() => setModalVisible(!modalVisible)}
  //       >
  //         <Text
  //           style = {style.btnTextoNuevaCita}>
  //           Este es un boton</Text>
  //       </Pressable>

  //       <Formulario
  //         modalVisible = {modalVisible}
  //         setModalVisible = {setModalVisible}      
  //       />      
  //     </SafeAreaView>
  //   );
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