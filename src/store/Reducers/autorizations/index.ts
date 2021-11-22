import { LOGIN, LOGOUT } from "./action";

const statusFromStorage: boolean =
  JSON.parse(localStorage.getItem("auth") || "false") || false;

const initialState = {
  isAuthenticated: statusFromStorage,
};

export const autorization = (state = initialState, action: any) => {
  switch (action.type) {
    case LOGIN: {
      return { ...state, isAuthenticated: true };
    }
    case LOGOUT: {
      return { ...state, isAuthenticated: false };
    }
    default: {
      return state;
    }
  }
};
