export interface User {
	id: number;
	name: string;
	salary: number;
	companyValuation: number;
	createdAt: string;
	updatedAt: string;
}

export interface GetUsersResponse {
	clients: User[];
	totalPages: number;
	currentPage: number;
}

export interface GetUsersParams {
	page?: number;
	limit?: number;
}

export interface CreateUserDto {
	name: string;
	salary: number;
	companyValuation: number;
}

export interface UpdateUserDto {
	name: string;
	salary: number;
	companyValuation: number;
}
