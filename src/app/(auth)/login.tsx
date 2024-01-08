import { Stack } from 'expo-router';
import React, { useState } from 'react';
import { StyleSheet, TextInput, View, Text, Button } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { useSupabase } from '@/hooks/useSupabase';

export default function AuthPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { signUp, signInWithPassword, signInWithGoogle } = useSupabase();

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ headerShown: true, title: 'Supabase Expo Router App' }} />
      <View style={[styles.verticallySpaced, styles.mt20]}>
        <TextInput
          style={styles.textInput}
          onChangeText={(text) => setEmail(text)}
          value={email}
          placeholder="email@address.com"
          autoCapitalize="none"
        />
      </View>
      <View style={styles.verticallySpaced}>
        <TextInput
          style={styles.textInput}
          onChangeText={(text) => setPassword(text)}
          value={password}
          secureTextEntry
          placeholder="Password"
          autoCapitalize="none"
        />
      </View>
      <View style={[styles.verticallySpaced, styles.mt20]}>
        <TouchableOpacity
          onPress={() => signInWithPassword(email, password)}
          style={styles.buttonContainer}>
          <Text style={styles.buttonText}>SIGN IN</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.verticallySpaced}>
        <TouchableOpacity onPress={() => signUp(email, password)} style={styles.buttonContainer}>
          <Text style={styles.buttonText}>SIGN UP</Text>
        </TouchableOpacity>
      </View>
      <View style={[styles.verticallySpaced, styles.googleBtn]}>
        <Button title="Sign in with Google " onPress={() => signInWithGoogle()} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
    padding: 12,
  },
  verticallySpaced: {
    paddingTop: 4,
    paddingBottom: 4,
    alignSelf: 'stretch',
  },
  mt20: {
    marginTop: 20,
  },
  buttonContainer: {
    backgroundColor: '#000968',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    margin: 8,
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    alignSelf: 'center',
    textTransform: 'uppercase',
  },
  textInput: {
    borderColor: '#000968',
    borderRadius: 4,
    borderStyle: 'solid',
    borderWidth: 1,
    padding: 12,
    margin: 8,
  },
  googleBtn: {
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    margin: 8,
  },
});
