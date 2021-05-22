import { get, post, destroy } from "../baseApi";

export const getSleep = async () => {
  const sleep = await get("/sleep");
  return sleep.data;
};

export const mutateSleep = async (data, id) => {
  // Expects yy-mm-dd and 24:00
  const sleep = await post(`/sleep/${id}`, data);
  return sleep.data ? sleep.data : sleep;
};

export const deleteSleep = async (id) => {
  const deletedSleep = await destroy(`/sleep/${id}`);
  return deletedSleep.data ? deletedSleep.data : deletedSleep;
};
