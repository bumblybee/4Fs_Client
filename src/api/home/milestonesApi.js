import { get, post, put, destroy } from "../baseApi";

export const getMilestones = async () => {
  const milestones = await get("/milestones");

  return milestones.data;
};

export const mutateMilestone = async (data, id) => {
  const milestone = await put(`/milestones/${id}`, data);
  return milestone.data;
};
