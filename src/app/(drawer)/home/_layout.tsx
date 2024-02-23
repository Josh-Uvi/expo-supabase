import { DrawerToggleButton } from '@react-navigation/drawer';
import { Stack } from 'expo-router';

export default function HomeLayout() {
  return (
    <Stack
      screenOptions={{
        title: 'Home',
        headerShown: true,
        headerLeft: () => <DrawerToggleButton />,
      }}
    />
  );
}
