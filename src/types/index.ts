interface Args {
  input: {
    [key: string]: any;
  };
}

interface User {
  id: number;
  name: string;
  lastname: string;
  email: string;
  photoURL: string;
  createdAt: Date;
  active: boolean;
}

interface Context {
  user: User | null;
}

interface Parent {
  [key: string]: any;
}

export { Args, User, Context, Parent };
