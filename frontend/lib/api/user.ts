import { instance } from "../axios/interceptor";

export const getUsers = async () => {
    const start = performance.now();
    const { data } = await instance.get('http://localhost:3000/api/v1/users/getusers');
    const end = performance.now(); 

    console.log(`Fetch API latency: ${end - start} ms`);
    return data;
};

export const getUserByMonth = async () => {
    const start = performance.now();
    const { data } = await instance.get('http://localhost:4000/api/v1/users/count-by-month');
    const end = performance.now(); 
    console.log(`Fetch API latency: ${end - start} ms`);
    return data;
}

export const getUserById = async (userId: string) => {
    const { data } = await instance.get(`zapi/v1/users/${userId}`);
    return data;
};

export const updateUser = async () => {
    return;
};

export const deleteUser = async () => {
    return;
};