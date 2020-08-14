import create from 'zustand';
import { devtools } from 'zustand/middleware';
import User from './models/user';

const [useStore] = create(
  devtools((set: any) => ({
    user: null,
    setUser: (user: User) => set({ user: user }),
    logout: () => set({ user: null }),
  }))
);

export default useStore;
