import create from 'zustand';
import User from './models/user';

const [useStore] = create((set) => ({
  user: null,
  setUser: (user: User) => set({ user: user }),
  logout: () => set({ user: null }),
}));

export default useStore;
