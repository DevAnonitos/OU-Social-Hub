import axios from "axios";
import { instance } from '../axios/interceptor';

export const getUsersCount = async () => {
    const { data } = await instance.get(`
        ${process.env.NEXT_PUBLIC_API_URL}api/v1/admin/stats/users`
    );
    return data.count; 
};

export const getEventsCount = async () => {
    const { data } = await instance.get(`
        ${process.env.NEXT_PUBLIC_API_URL}api/v1/admin/stats/events`
    );
    return data.count; 
};

// admin handle dashboard


