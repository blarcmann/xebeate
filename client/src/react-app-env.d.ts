/// <reference types="react-scripts" />

interface User {
  username: string;
  firstname: string;
  lastname: string;
  email: string;
  bio: string;
  creator: boolean;
  following: User[];
  followers: User[];
}