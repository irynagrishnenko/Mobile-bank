import { createContext, useReducer, Dispatch } from "react";

export type AuthState = {
  isLogged: boolean;
  token: string | null;
  email: string | null;
};

export const initialState: AuthState = {
  isLogged: false,
  token: null,
  email: null,
};

export type AuthAction =
  | {
      type: "LOGIN";
      payload: {
        isLogged: boolean;
        token: string;
        email: string;
      };
    }
  | { type: "LOGOUT" };

export const authReducer = (
  state: AuthState,
  action: AuthAction
): AuthState => {
  switch (action.type) {
    case "LOGIN":
      const newState = {
        ...state,
        isLogged: action.payload.isLogged,
        token: action.payload.token,
        email: action.payload.email,
      };
      localStorage.setItem("authState", JSON.stringify(newState));
      return newState;

    case "LOGOUT":
      localStorage.removeItem("authState");
      return initialState;
    default:
      return state;
  }
};

export const AuthContext = createContext<{
  state: AuthState;
  dispatch: Dispatch<AuthAction>;
}>({
  state: initialState,
  dispatch: function (value: AuthAction): void {
    return;
  },
});

export const AuthProvider = ({ children }: any) => {
  const storedData = localStorage.getItem("authState");
  const initialData = storedData ? JSON.parse(storedData) : initialState;

  const [state, dispatch] = useReducer(authReducer, initialData);
  console.log(state);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
