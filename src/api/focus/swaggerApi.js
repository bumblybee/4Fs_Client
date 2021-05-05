import { get, post, put, destroy } from "../baseApi";

export const mutateMoment = async (data, id) => {
  return await post(`/moments/${id}`, data);
};

export const getAccomplishments = async () => {
  const accomplishments = await get("/accomplishments");
  return accomplishments.data;
};

export const mutateAccomplishment = async (data, id) => {
  const accomplishment = await post(`/accomplishments/${id}`, data);
  return accomplishment.data;
};

export const deleteAccomplishment = async (id) => {
  const deletedAccomplishment = await destroy(`/accomplishments/${id}`);
  return deletedAccomplishment;
};

export const getSkills = async () => {
  const skills = await get("/skills");
  return skills.data;
};

export const mutateSkill = async (data, id) => {
  return await post(`/skills/${id}`, data);
};
