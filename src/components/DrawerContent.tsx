import { AntDesign } from '@expo/vector-icons';
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';
import { View } from 'react-native';

import { useSupabase } from '@/hooks/useSupabase';

function DrawerContent(props: DrawerContentComponentProps) {
  const { signOut } = useSupabase();
  return (
    <DrawerContentScrollView {...props} contentContainerStyle={{ flex: 1 }}>
      <DrawerItemList {...props} />
      <View style={{ flex: 1, marginVertical: 20, borderWidth: 1 }}>
        <DrawerItem
          label="Logout"
          onPress={() => signOut()}
          icon={({ color, size }) => <AntDesign name="logout" size={size} color={color} />}
          style={{ flex: 1, justifyContent: 'flex-end' }}
        />
      </View>
    </DrawerContentScrollView>
  );
}

export default DrawerContent;
