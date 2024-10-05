import { instance } from "../axios/interceptor";

export const createCategory = async () => {
  const { data } = await instance.post(`http://localhost:4000/api/v1/categories/create`);
  return data;
};