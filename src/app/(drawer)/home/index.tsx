import { DrawerToggleButton } from '@react-navigation/drawer';
import { Drawer } from 'expo-router/drawer';
import { StyleSheet, Text, View } from 'react-native';

export default function HomePage() {
  return (
    <View style={styles.container}>
      <Drawer.Screen
        options={{
          title: 'Home',
          headerShown: true,
          headerLeft: () => <DrawerToggleButton />,
        }}
      />
      <Text>Home page for drawer!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
