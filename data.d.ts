export interface Session {
  user: {
    email: string | null;
    username: string | null;
    image: string | null;
  };
  expires: string;
}
