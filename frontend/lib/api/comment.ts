import axios from "axios";
import { instance } from "../axios/interceptor";

export const createComment = async () => {
    return;
};

export const getAllComments = async (eventId: string) => {
    const { data } = await axios.get(`http://localhost:4000/api/v1/comments/${eventId}`);
    return data;
};

export const deleteComment = async () => {
    return;
};
