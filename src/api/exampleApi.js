import { get, post, put, destroy } from "./baseApi";

export const signupUser = async () => {
  const signup = await post("/example");
  return signup;
};

export const loginUser = async () => {
  const login = await post("/example/login");
  return login;
};

export const updateUser = async () => {
  const update = await put("/users", {
    firstName: "Peter",
    gender: "male",
    age: 52,
  });
  return update.data;
};

export const getMilestones = async () => {
  const milestones = await get("/milestones");

  return milestones.data;
};

export const mutateMilestone = async (data, id) => {
  const milestone = await put(`/milestones/${id}`, data);
  return milestone.data;
};

export const mutateBelief = async (data, id) => {
  const belief = await post(`/beliefs/${id}`, data);
  return belief;
};

export const getBeliefs = async () => {
  const beliefs = await get("/beliefs");
  return beliefs.data;
};

export const deleteBelief = async (id) => {
  const deletedBelief = await destroy(`/beliefs/${id}`);
  return deletedBelief.data;
};

export const getAccomplishments = async () => {
  const accomplishments = await get("/accomplishments");
  return accomplishments.data;
};

export const createAccomplishment = async (data) => {
  const accomplishment = await post("/accomplishments", data);
  return accomplishment.data;
};

export const getSkills = async () => {
  const skills = await get("/skills");
  return skills.data;
};

export const createSkill = async (data) => {
  return await post("/skills", data);
};

export const mutateSkill = async (data, id) => {
  return await post(`/skills/${id}`, data);
};

export const mutateHabit = async (data, id) => {
  return await post(`/habits/${id}`, data);
};

export const mutateMoment = async (data, id) => {
  return await post(`/moments/${id}`, data);
};

export const createResource = async (data) => {
  return await post("/resources", data);
};

export const mutateFastingWindow = async (data, id) => {
  // Expects yy-mm-dd
  return await post(`/fasting-window/${id}`, data);
};

export const mutateSleep = async (data, id) => {
  // Expects yy-mm-dd and 24:00
  return await post(`/sleep/${id}`, data);
};

export const mutateSystem = async (data, id) => {
  return await post(`/system/${id}`, data);
};

export const findSystemWeek = async (data) => {
  return await post("/system/week", data);
};
