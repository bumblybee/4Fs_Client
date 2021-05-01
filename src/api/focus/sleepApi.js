import { get, post, put, destroy } from "../baseApi";

export const mutateSleep = async (data, id) => {
  // Expects yy-mm-dd and 24:00
  return await post(`/sleep/${id}`, data);
};
