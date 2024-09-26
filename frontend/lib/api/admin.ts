import axios from "axios";
import { instance } from '../axios/interceptor';

export const getUsersCount = async () => {
    const { data } = await axios.get("http://localhost:4000/api/v1/admin/stats/users");
    return data.count; 
};

export const getEventsCount = async () => {
    const { data } = await axios.get("http://localhost:4000/api/v1/admin/stats/events");
    return data.count; 
};

// admin handle dashboard


