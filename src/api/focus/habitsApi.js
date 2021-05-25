import { get, post, destroy } from "../baseApi";

export const getHabits = async () => {
  const habits = await get("/habits");
  return habits.data ? habits.data : habits;
};

export const mutateHabit = async (data, id) => {
  const habit = await post(`/habits/${id}`, data);
  return habit.data ? habit.data : habit;
};

export const deleteHabit = async (id) => {
  const habit = await destroy(`/habits/${id}`);
  return habit.data ? habit.data : habit;
};
