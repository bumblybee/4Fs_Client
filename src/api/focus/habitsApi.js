import { get, post, put, destroy } from "../baseApi";

export const mutateHabit = async (data, id) => {
  return await post(`/habits/${id}`, data);
};
