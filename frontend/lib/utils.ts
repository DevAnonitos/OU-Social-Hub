import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { jwtDecode } from "jwt-decode";
import { UrlQueryParams, RemoveUrlQueryParams } from "@/types";
import qs from 'query-string';

interface DecodedToken {
  exp: number;
};

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
};

export const getTokenExpiryDate = (token: string): number | null => {
  try {
    const decoded: DecodedToken = jwtDecode(token);
    if (decoded.exp) {
      return decoded.exp * 1000; 
    }
    return null;
  } catch (error) {
    return null;
  }
};


export const formatTime = (seconds: number) => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.floor(seconds % 60);
  return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
};

export const formatDateTime = (dateString: Date) => {
  const dateTimeOptions: Intl.DateTimeFormatOptions = {
    weekday: 'short', // abbreviated weekday name (e.g., 'Mon')
    month: 'short', // abbreviated month name (e.g., 'Oct')
    day: 'numeric', // numeric day of the month (e.g., '25')
    hour: 'numeric', // numeric hour (e.g., '8')
    minute: 'numeric', // numeric minute (e.g., '30')
    hour12: true, // use 12-hour clock (true) or 24-hour clock (false)
  };

  const dateOptions: Intl.DateTimeFormatOptions = {
    weekday: 'short', // abbreviated weekday name (e.g., 'Mon')
    month: 'short', // abbreviated month name (e.g., 'Oct')
    year: 'numeric', // numeric year (e.g., '2023')
    day: 'numeric', // numeric day of the month (e.g., '25')
  };

  const timeOptions: Intl.DateTimeFormatOptions = {
    hour: 'numeric', // numeric hour (e.g., '8')
    minute: 'numeric', // numeric minute (e.g., '30')
    hour12: true, // use 12-hour clock (true) or 24-hour clock (false)
  };

  const formattedDateTime: string = new Date(dateString).toLocaleString('en-US', dateTimeOptions);

  const formattedDate: string = new Date(dateString).toLocaleString('en-US', dateOptions)

  const formattedTime: string = new Date(dateString).toLocaleString('en-US', timeOptions)

  return {
    dateTime: formattedDateTime,
    dateOnly: formattedDate,
    timeOnly: formattedTime,
  }
}

export const convertFileToUrl = (file: File) => {
  return URL.createObjectURL(file);
};

export function formUrlQuery({ params, key, value }: UrlQueryParams) {
  const currentUrl = qs.parse(params);

  currentUrl[key] = value;

  return qs.stringifyUrl(
    {
      url: window.location.pathname,
      query: currentUrl,
    },
    { skipNull: true }
  );
};

export function removeKeysFromQuery({ params, keysToRemove }: RemoveUrlQueryParams) {
  const currentUrl = qs.parse(params);

  keysToRemove.forEach(key => {
    delete currentUrl[key]
  });

  return qs.stringifyUrl(
    {
      url: window.location.pathname,
      query: currentUrl,
    },
    { skipNull: true }
  );
};

export const handleError = (error: unknown) => {
  console.error(error)
  throw new Error(typeof error === 'string' ? error : JSON.stringify(error))
};

export const notificationTemplate = (notification: any) => {
  const { entityType, entityContent, userName, eventTitle } = notification;

  switch (entityType) {
    case 'COMMENT':
      return `${userName} đã bình luận về sự kiện "${eventTitle}"`;
    case 'LIKE':
      return `${userName} đã thích bài viết "${entityContent}"`;
    case 'FOLLOW':
      return `${userName} đã theo dõi bạn`;
    case 'REPLY':
      return `${userName} đã trả lời bình luận của bạn`;
    default:
      return `${userName} đã tương tác với bạn`;
  };
};

export const formatTimeAgo = (date: Date) => {
  const now = new Date();
  const seconds = Math.floor((now.getTime() - date.getTime()) / 1000);

  if (seconds < 60) return `${seconds} seconds ago`;
  if (seconds < 3600) return `${Math.floor(seconds / 60)} minute${seconds < 120 ? '' : 's'} ago`;
  if (seconds < 86400) return `${Math.floor(seconds / 3600)} hour${seconds < 7200 ? '' : 's'} ago`;
  if (seconds < 604800) return `${Math.floor(seconds / 86400)} day${seconds < 172800 ? '' : 's'} ago`;
  return `${Math.floor(seconds / 604800)} week${seconds < 1209600 ? '' : 's'} ago`;
};
