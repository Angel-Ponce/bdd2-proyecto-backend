interface Args {
  input: {
    [key: string]: any;
  };
}

interface User {
  id: string;
  name: string;
  lastname: string;
  email: string;
  photoURL: string;
  sessionToken: string;
  createdAt: Date;
}

interface Context {
  user: User | null;
}

interface Parent {
  [key: string]: any;
}

export { Args, User, Context, Parent };
