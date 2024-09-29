import {
    useQuery,
    useMutation,
    useQueryClient,
    useInfiniteQuery,
} from "@tanstack/react-query";

import { QUERY_KEY } from "./queriesKey";

import { 
    getUsers, 
    getEventsCount, 
    getUsersCount,
    getUserByMonth, 
    getUserById,
} from "../api";

export const useGetUsers = () => {
    return useQuery({
        queryKey: [QUERY_KEY.GET_USERS],
        queryFn: () => getUsers(),
        staleTime: 1000 * 60 * 60 * 24,
        retry: 1, 
    });
};

export const useGetUsersCount = () => { 
    return useQuery({
        queryKey: [QUERY_KEY.GET_USERS_COUNT],
        queryFn: () => getUsersCount(),
        staleTime: 1000,
    })
};

export const useGetEventsCount = () => { 
    return useQuery({
        queryKey: [QUERY_KEY.GET_EVENTS_COUNT],
        queryFn: () => getEventsCount(),
        staleTime: 1000,
    });
};

export const useGetUserById = (userId: string) => { 
    return useQuery({
        queryKey: [QUERY_KEY.GET_USER_BY_ID],
        queryFn: () => getUserById(userId),
        enabled: !!userId,
    });
};


export const useGetUsersByMonth = () => { 
    return useQuery({
        queryKey: [QUERY_KEY.GET_USER_BY_MONTH],
        queryFn: () => getUserByMonth(),
        staleTime: 1000,
    });
};
