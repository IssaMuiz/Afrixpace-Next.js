export interface Session {
  user: {
    email: string;
    username: string;
    image: string;
  };
  expires: string;
}
