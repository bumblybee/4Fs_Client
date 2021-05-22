import { get, post, destroy } from "../baseApi";

export const getAccomplishments = async () => {
  const accomplishments = await get("/accomplishments");
  return accomplishments.data;
};

export const mutateAccomplishment = async (data, id) => {
  const accomplishment = await post(`/accomplishments/${id}`, data);
  return accomplishment.data ? accomplishment.data : accomplishment;
};

export const deleteAccomplishment = async (id) => {
  const deletedAccomplishment = await destroy(`/accomplishments/${id}`);
  return deletedAccomplishment.data;
};

export const getMoments = async () => {
  const moments = await get("/moments");
  return moments.data;
};

export const mutateMoment = async (data, id) => {
  const moment = await post(`/moments/${id}`, data);
  return moment.data ? moment.data : moment;
};

export const deleteMoment = async (id) => {
  const deletedMoment = await destroy(`/moments/${id}`);
  return deletedMoment.data;
};

export const getSkills = async () => {
  const skills = await get("/skills");
  return skills.data;
};

export const mutateSkill = async (data, id) => {
  const skill = await post(`/skills/${id}`, data);
  return skill.data ? skill.data : skill;
};

export const deleteSkill = async (id) => {
  const deletedSkill = await destroy(`/skills/${id}`);
  return deletedSkill.data ? deletedSkill.data : deletedSkill;
};
