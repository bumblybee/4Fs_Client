import { get, post, put, destroy } from "../baseApi";

export const createResource = async (data) => {
  return await post("/resources", data);
};
