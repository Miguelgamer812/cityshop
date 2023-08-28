import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';

function LoginScreen() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    // Aquí puedes verificar las credenciales del usuario
    // Si las credenciales son válidas, establece loggedIn en true
    setLoggedIn(true);
  };

  return (
    <View>
      {loggedIn ? (
        <Text>Welcome to Dashboard!</Text>
      ) : (
        <View>
          <TextInput
            placeholder="Username"
            value={username}
            onChangeText={setUsername}
          />
          <TextInput
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
          <Button title="Login" onPress={handleLogin} />
        </View>
      )}
    </View>
  );
}

export default LoginScreen;