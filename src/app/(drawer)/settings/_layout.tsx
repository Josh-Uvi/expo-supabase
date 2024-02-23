import { DrawerToggleButton } from '@react-navigation/drawer';
import { Stack } from 'expo-router';

export default function SettingsLayout() {
  return (
    <Stack
      screenOptions={{
        title: 'Settings',
        headerShown: true,
        headerLeft: () => <DrawerToggleButton />,
      }}
    />
  );
}
