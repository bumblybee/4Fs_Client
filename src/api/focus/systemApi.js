import { get, post, put, destroy } from "../baseApi";

export const getSystem = async () => {
  const system = await get("/system");
  return system.data;
};

export const getCurrentSystem = async () => {
  const currSystem = await get("/system/current");
  return currSystem && currSystem.data ? currSystem.data : currSystem;
};

export const getPriorSystems = async () => {
  const priorSystems = await get("/system/prior");
  return priorSystems && priorSystems.data ? priorSystems.data : priorSystems;
};

export const mutateSystem = async (data, id) => {
  const system = await post(`/system/${id}`, data);
  return system.data;
};

export const deleteSystem = async (id) => {
  const deletedSystem = await destroy(`/system/${id}`);
  return deletedSystem;
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
