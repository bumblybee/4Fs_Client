import { get, post } from "../baseApi";

export const createFasting = async (data) => {
  // Expects yy-mm-dd
  const fasting = await post("/fasting", data);
  return fasting && fasting.data ? fasting.data : fasting;
};

export const getFasting = async () => {
  const fasting = await get("/fasting");
  return fasting && fasting.data ? fasting.data : fasting;
};
