import { instance } from "../axios/interceptor";

export const getNotifications = async (userId: string) => {
  const { data } = await instance.get(
    `http://localhost:4000/api/v1/notifications/get-notifications/${userId}`);
  return data;
};