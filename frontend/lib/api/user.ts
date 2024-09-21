import axios from "axios";

export const getUsers = async () => {
    const { data } = await axios.get('http://localhost:4000/api/v1/users/getusers');
    return data;
};

export const getUserById = async () => {
    return;
};

export const updateUser = async () => {
    return;
};

export const deleteUser = async () => {
    return;
};