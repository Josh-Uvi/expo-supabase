import { Slot, useRouter, useSegments } from 'expo-router';
import { useEffect } from 'react';

import { SupabaseProvider } from '@/hooks/AuthProvider';
import { NewsProvider } from '@/hooks/NewsProvider';
import { useSupabase } from '@/hooks/useSupabase';

const InitialLayout = () => {
  const { session, initialized } = useSupabase();
  const segments = useSegments();
  const router = useRouter();

  useEffect(() => {
    if (!initialized) return;

    // Check if the path/url is in the (drawer) group
    const inDrawerGroup = segments[0] === '(drawer)';

    if (session && !inDrawerGroup) {
      // Redirect authenticated users to the home page
      router.replace('/home');
    } else if (!session) {
      // Redirect unauthenticated users to the sign up page
      router.replace('/(auth)/login');
    }
  }, [session, initialized]);

  return <Slot />;
};

export default function RootLayout() {
  return (
    <SupabaseProvider>
      <NewsProvider>
        <InitialLayout />
      </NewsProvider>
    </SupabaseProvider>
  );
}
