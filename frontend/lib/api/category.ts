import { instance } from "../axios/interceptor";

export const createCategory = async () => {
  const { data } = await instance.post(`
    ${process.env.NEXT_PUBLIC_API_URL}api/v1/categories/create`
  );
  return data;
};

export const getAllCategories = async () => { 
  const { data } = await instance.get(`
    ${process.env.NEXT_PUBLIC_API_URL}api/v1/categories/get-categories`
  );
  return data;
};