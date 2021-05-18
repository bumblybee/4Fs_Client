import { get, post, destroy } from "../baseApi";

// export const getSystem = async () => {
//   const system = await get("/system");
//   return system.data;
// };

export const getCurrentPractices = async () => {
  const currPractices = await get("/practices/current");
  return currPractices && currPractices.data
    ? currPractices.data
    : currPractices;
};

export const getPriorPractices = async () => {
  const priorPractices = await get("/practices/prior");
  return priorPractices && priorPractices.data
    ? priorPractices.data
    : priorPractices;
};

export const mutatePractice = async (data, id) => {
  const practice = await post(`/practices/${id}`, data);
  return practice.data;
};

export const deletePractice = async (id) => {
  const deletedPractice = await destroy(`/practices/${id}`);
  return deletedPractice;
};

export const startWeek = async (data) => {
  const week = await post("/system-week", data);
  return week;
};

export const getCurrentWeek = async () => {
  const currWeek = await get("/system-week/current");
  return currWeek.data;
};

export const deleteCurrentWeek = async (id) => {
  const deletedWeek = await destroy(`/system-week/${id}`);
  return deletedWeek;
};
