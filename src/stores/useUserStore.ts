import { create, StateCreator } from "zustand";
import { persist, PersistOptions } from "zustand/middleware";

export interface User {
  email: string;
  id: number;
  name: string;
  role: string;
  [key: string]: string | number;
}

export interface UserState {
  user: User | null;
  setUser: (newUser: User | null) => void;
  removerUser: () => void;
}

type userPersist = (
  config: StateCreator<UserState>,
  options: PersistOptions<UserState>
) => StateCreator<UserState>;

const useUserState = create<UserState>(
  (persist as userPersist)(
    (set) => ({
      user: null,
      setUser: (newUser: User | null) =>
        set(() => ({
          user: newUser,
        })),
      removerUser: () => set(() => ({ user: null })),
    }),
    {
      name: "user-storage",
    }
  )
);

export default useUserState;
