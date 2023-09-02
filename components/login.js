import React, { useState } from 'react';
import { View, TextInput, Button, Text, SafeAreaView, StyleSheet, } from 'react-native';
import Formulario from './Formulario';

function LoginScreen() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const [modalVisible, setModalVisible] = useState(false)

  const cerrarModal = () => {
    setModalVisible(false)
  }
  const handleLogin = () => {
    // Si las credenciales son válidas, establece loggedIn en true
    if (username == 'miguel' && password == '123') {
      setLoggedIn(true);
    }

  };

  return (
    <View>
      {loggedIn ? (
        
          <Formulario
            modalVisible={modalVisible}
            setModalVisible={setModalVisible}
          />
      ) : (
        <View>
          <TextInput
            placeholder="Nombre de usuario"
            value={username}
            onChangeText={setUsername}
            backgroundColor="#A1A1A1"
            placeholderTextColor={"#000"}
          />
          <TextInput
            placeholder="Contraseña"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            backgroundColor="#A1A1A1"
            placeholderTextColor={"#000"}
          />
          <Button title="Iniciar Sesión" onPress={handleLogin} />
        </View>
      )}
    </View>
  );
}
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
});

export default LoginScreen;