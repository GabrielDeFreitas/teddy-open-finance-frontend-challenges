export const UsersEndpoints = {
	BASE: '/users',
} as const;

export type UsersEndpoint =
	(typeof UsersEndpoints)[keyof typeof UsersEndpoints];
