import { get, post, put, destroy } from "../baseApi";

export const mutateSystem = async (data, id) => {
  return await post(`/system/${id}`, data);
};

export const findSystemWeek = async (data) => {
  return await post("/system/week", data);
};
