import axios from 'axios';
import type {
	CreateUserDto,
	GetUsersParams,
	GetUsersResponse,
	UpdateUserDto,
	User,
} from './types';
import { UsersEndpoints } from '../../utils/enum/users-endpoints';

export const api = axios.create({
	baseURL: import.meta.env.VITE_API_BASE_URL,
});

export const getUsers = async (
	params?: GetUsersParams,
): Promise<GetUsersResponse> => {
	const response = await api.get(UsersEndpoints.BASE, { params });
	return response.data;
};

export const createUser = async (payload: CreateUserDto): Promise<User> => {
	const response = await api.post(UsersEndpoints.BASE, payload);
	return response.data;
};

export const updateUser = async (
	id: string,
	payload: UpdateUserDto,
): Promise<User> => {
	const response = await api.patch(`${UsersEndpoints.BASE}/${id}`, payload);
	return response.data;
};

export const deleteUser = async (id: string): Promise<void> => {
	await api.delete(`${UsersEndpoints.BASE}/${id}`);
};
