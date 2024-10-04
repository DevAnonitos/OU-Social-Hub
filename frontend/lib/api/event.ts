import axios from "axios";
import { instance } from "../axios/interceptor";

export const createEvent = async () => {
    return;
};

export const getPendingEvents = async () => {
    const { data } = await instance.get('http://localhost:4000/api/v1/events/pending');
    console.log(data);
    return data;
};

export const approveEvents = async (eventId: string) => { 
    const { data } = await instance.patch(`http://localhost:4000/api/v1/events/approve/${eventId}`);
    console.log(data);
    return data;
};

export const rejectEvents = async (eventId: string) => {
    const { data } = await instance.patch(`http://localhost:4000/api/v1/events/reject/${eventId}`);
    console.log(data);
    return data;
};

export const getAllEvents = async () => {
    const { data } = await instance.get(`http://localhost:4000/api/v1/events/get-events/`);
    console.log(data);
    return data;
};


export const getEventById = async () => {
    return;
};

export const updateEvent = async () => {
    return;
}

export const deleteEvent = async () => {
    return;
};


export const getEventByUser = async () => {
    return;
};