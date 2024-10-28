import { instance } from "../axios/interceptor";
export const createCategory = async () => {
  const { data } = await instance.post(`zapi/v1/categories/create`);
  return data;
};

export const getAllCategories = async () => { 
  const { data } = await instance.get(`http://localhost:4000/api/v1/categories/get-categories`);
  return data;
};