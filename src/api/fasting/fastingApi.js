import { get, post, put, destroy } from "../baseApi";

export const mutateFastingWindow = async (data, id) => {
  // Expects yy-mm-dd
  return await post(`/fasting-window/${id}`, data);
};
