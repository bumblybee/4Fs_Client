import { get, post, put } from "../baseApi";

export const getUser = async () => {
  const res = await get("/users/current");
  return res;
};

export const signupUser = async () => {
  const signup = await post("/users/signup");
  return signup;
};

export const loginUser = async (data) => {
  const login = await post("/users/login", data);
  return login;
};

export const updateUser = async () => {
  const update = await put("/users", {
    firstName: "Peter",
    gender: "male",
    age: 52,
  });
  return update.data;
};

export const logoutUser = async () => {
  const res = await post("/users/logout");
  return res;
};
