import { get, post, put, destroy } from "../baseApi";

export const mutateMoment = async (data, id) => {
  return await post(`/moments/${id}`, data);
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
