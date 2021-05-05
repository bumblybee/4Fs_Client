import { get, post, put, destroy } from "../baseApi";

export const getSystem = async () => {
  const system = await get("/system");
  return system.data;
};

export const mutateSystem = async (data, id) => {
  const system = await post(`/system/${id}`, data);
  return system.data;
};

export const deleteSystem = async (id) => {
  const deletedSystem = await destroy(`/system/${id}`);
  return deletedSystem;
};

export const findSystemWeek = async (data) => {
  return await post("/system/week", data);
};
