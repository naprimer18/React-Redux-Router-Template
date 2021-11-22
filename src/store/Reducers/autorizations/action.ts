export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";

export const loginAction = () => {
  localStorage.setItem("auth", JSON.stringify(true));
  return { type: LOGIN };
};

export const logOutAction = () => {
  localStorage.clear();
  return { type: LOGOUT };
};
