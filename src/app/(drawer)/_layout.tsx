import Ionicons from '@expo/vector-icons/Ionicons';
import { Drawer } from 'expo-router/drawer';

import DrawerContent from '@/components/DrawerContent';

export default function DrawerLayout() {
  return (
    <Drawer
      screenOptions={{ headerShown: false, swipeEdgeWidth: 0, drawerType: 'slide' }}
      drawerContent={(props) => <DrawerContent {...props} />}>
      <Drawer.Screen
        name="home"
        options={{
          drawerLabel: 'Home',
          title: 'Home',
          drawerIcon: ({ size, color }) => <Ionicons name="md-home" size={size} color={color} />,
        }}
      />
      <Drawer.Screen
        name="settings"
        options={{
          drawerLabel: 'Settings',
          title: 'Settings',
          drawerIcon: ({ size, color }) => (
            <Ionicons name="md-settings" size={size} color={color} />
          ),
        }}
      />
    </Drawer>
  );
}
