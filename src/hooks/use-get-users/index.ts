import { useQuery } from '@tanstack/react-query';
import type { GetUsersParams, GetUsersResponse } from '../../service/api/types';
import { getUsers } from '../../service/api/api-client';

export function useGetUsers(params?: GetUsersParams) {
	return useQuery<GetUsersResponse>({
		queryKey: ['users', params],
		queryFn: () => getUsers(params),
	});
}
