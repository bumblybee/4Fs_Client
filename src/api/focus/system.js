import { get, put, post } from "../baseApi";

export const getSystem = async () => {
  const system = await get("/system");
  return system.data;
};

export const mutateSystem = async (data, id) => {
  const system = await post(`/system/${id}`, data);
  return system.data;
};
