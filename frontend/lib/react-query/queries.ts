import {
    useQuery,
    useMutation,
    useQueryClient,
    useInfiniteQuery,
} from "@tanstack/react-query";

import { getUsers } from "../api";

export const userGetUsers = () => {
    return useQuery({
        queryKey: ["user"],
        queryFn: () => getUsers(),
        staleTime: 1000 * 60 * 60 * 24,
        retry: 1, 
    });
};