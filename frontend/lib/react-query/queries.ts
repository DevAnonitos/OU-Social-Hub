import {
    useQuery,
    useMutation,
    useQueryClient,
    useInfiniteQuery,
} from "@tanstack/react-query";

import { 
    getUsers, 
    getEventsCount, 
    getUsersCount,
    getUserByMonth, 
} from "../api";

export const useGetUsers = () => {
    return useQuery({
        queryKey: ["user"],
        queryFn: () => getUsers(),
        staleTime: 1000 * 60 * 60 * 24,
        retry: 1, 
    });
};

export const useGetUsersCount = () => { 
    return useQuery({
        queryKey: ["userCount"],
        queryFn: () => getUsersCount(),
        staleTime: 1000,
    })
};

export const useGetEventsCount = () => { 
    return useQuery({
        queryKey: ["eventCount"],
        queryFn: () => getEventsCount(),
        staleTime: 1000,
    });
};

export const useGetUsersByMonth = () => { 
    return useQuery({
        queryKey: ["users-by-month"],
        queryFn: () => getUserByMonth(),
        staleTime: 1000,
    });
}
