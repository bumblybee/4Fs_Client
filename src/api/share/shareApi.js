import { get, post } from "../baseApi";

export const mutateShared = async (data) => {
  const res = await post("/shared", data);
  return res.data ? res.data : res;
};

export const getShared = async () => {
  const res = await get("/shared");
  return res && res.data ? res.data : res;
};
