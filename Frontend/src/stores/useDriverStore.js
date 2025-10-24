import { create } from "zustand";
import { axiosI } from "../lib/axios.js";

export const useDriverStore = create((set) => ({
  drivers: [],
  getDrivers: async () => {
    try {
      const res = await axiosI.get("/drivers"); // Backend already limits to 100
      set({ drivers: res.data });
    } catch (err) {
      console.log("Error fetching drivers:", err.message);
    }
  },
}));
