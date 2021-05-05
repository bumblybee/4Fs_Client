import { get, post, put } from "../baseApi";

export const getUser = async () => {
  const res = await get("/users/current");
  return res;
};

export const signupUser = async (data) => {
  const signup = await post("/users/signup", data);
  return signup;
};

export const loginUser = async (data) => {
  const login = await post("/users/login", data);
  return login;
};

export const validateUserEmail = async (data) => {
  const emailValidation = await post("/users/validate-email", data);
  return emailValidation;
};

export const updateUser = async (data) => {
  const update = await put("/users", data);
  return update;
};

export const logoutUser = async () => {
  const res = await post("/users/logout");
  return res;
};
