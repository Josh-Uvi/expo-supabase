import { StyleSheet, Text, View } from 'react-native';

export default function SettingsPage() {
  return (
    <View style={styles.container}>
      <Text>Settings page for drawer!</Text>
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
