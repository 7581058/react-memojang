import { IMemoType } from "../App";

export const setItem = (key: string, value: IMemoType[]) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const getItem = (key: string) => {
  return JSON.parse(localStorage.getItem(key) || "");
};
