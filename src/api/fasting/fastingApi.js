import { get, post, put, destroy } from "../baseApi";

export const createFasting = async (data) => {
  // Expects yy-mm-dd
  const fasting = await post("/fasting", data);
  return fasting && fasting.data ? fasting.data : fasting;
};

export const getFastingProgress = async () => {
  const fasting = await get("/fasting");
  return fasting && fasting.data ? fasting.data : fasting;
};
