import axios from "axios";

export const getUsers = async () => {
    const { data } = await axios.get('http://localhost:4000/api/v1/users/getusers');
    return data;
};