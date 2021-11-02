import { createContext, Dispatch, ReactNode, useContext, useReducer } from "react";
import reducer from "./reducer";

const initialState: State = {
  loading: false,
  isDark: false,
  user: {
    username: '',
    firstname: '',
    lastname: '',
    email: '',
    bio: '',
    creator: false,
    following: [],
    followers: [],
  },
  users: [],
}

const globalContext = createContext<{
  state: State;
  dispatch: Dispatch<Action>;
}>({
  state: initialState,
  dispatch: () => { },
});

export const GlobalContextProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <globalContext.Provider value={{ state, dispatch }}>
      {children}
    </globalContext.Provider>
  );
};

export const useGlobalContext: ContextHook = () => {
  const { state, dispatch } = useContext(globalContext);
  return { state, dispatch };
};