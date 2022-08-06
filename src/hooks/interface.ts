export type User = {
  id: string;
  username: string;
  firstName: string;
  email: string;
  avatar: string;
  token: string;
};

export type AuthContextData = {
  user: User;
  loading: boolean;
  signIn: () => Promise<void>;
  signOut: () => Promise<void>;
};
