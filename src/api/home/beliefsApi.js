import { get, post, destroy } from "../baseApi";

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
