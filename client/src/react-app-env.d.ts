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
interface State {
  isDark: boolean;
  loading: boolean;
  user: User,
  users: User[]
}

type ActionTypes = 'LOADING' | 'TOGGLE_MODE' | 'LOGIN' | 'LOGOUT' | 'SIGNUP'

interface Action {
  type: ActionTypes;
  payload?: any;
}

type ReducerType = (state: State, action: Action) => State;

type ContextHook = () => {
  state: State,
  dispatch: (action: Action) => void;
}