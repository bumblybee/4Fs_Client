import { get, post, destroy } from "../baseApi";

export const getCurrentPractices = async () => {
  const currPractices = await get("/practices/current");
  return currPractices && currPractices.data
    ? currPractices.data
    : currPractices;
};

export const getPracticeProgress = async () => {
  const priorPractices = await get("/practices/progress");
  return priorPractices && priorPractices.data
    ? priorPractices.data
    : priorPractices;
};

export const getPracticeStore = async () => {
  const storedPractices = await get("/practices/store");
  return storedPractices && storedPractices.data
    ? storedPractices.data
    : storedPractices;
};

export const mutatePractice = async (data, id) => {
  const practice = await post(`/practices/${id}`, data);
  return practice.data ? practice.data : practice;
};

export const deletePractice = async (id) => {
  const deletedPractice = await destroy(`/practices/${id}`);
  return deletedPractice.data ? deletedPractice.data : deletedPractice;
};

export const startWeek = async (data) => {
  const week = await post("/practice-weeks", data);
  return week && week.data ? week.data : week;
};

export const getCurrentWeek = async () => {
  const currWeek = await get("/practice-weeks/current");
  return currWeek && currWeek.data ? currWeek.data : currWeek;
};

export const getPriorWeeks = async () => {
  const priorWeeks = await get("/practice-weeks/prior");
  return priorWeeks.data;
};

export const deleteCurrentWeek = async (id) => {
  const deletedWeek = await destroy(`/practice-weeks/${id}`);
  return deletedWeek.data ? deletedWeek.data : deletedWeek;
};
