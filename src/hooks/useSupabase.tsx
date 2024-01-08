import { useContext } from 'react';

import { SupabaseContext } from './AuthProvider';

export const useSupabase = () => useContext(SupabaseContext);
