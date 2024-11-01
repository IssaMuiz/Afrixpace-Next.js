interface userType {
  id: number;
  name: string | undefined;
  email: string | undefined;
  password: string | undefined;
}

export const users: userType[] = [
  { id: 1, name: "issa muiz", email: "muiz@gmail.com", password: "issamuiz" },
  { id: 2, name: "elen mike", email: "mike@gmail.com", password: "elenmike" },
  { id: 3, name: "mark jack", email: "jack@gmail.com", password: "markjack" },
  {
    id: 4,
    name: "tunde muiz",
    email: "tunde@gmail.com",
    password: "tundemuiz",
  },
  {
    id: 5,
    name: "jeff bezoz",
    email: "bezoz@gmail.com",
    password: "jeffbezoz",
  },
];
