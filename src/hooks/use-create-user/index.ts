import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createUser } from '../../service/api/api-client';
import type { CreateUserDto } from '../../service/api/types';

export function useCreateUser() {
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: (data: CreateUserDto) => createUser(data),

		onSuccess: () => {
			alert('Usuário criado com sucesso!');
			queryClient.invalidateQueries({ queryKey: ['users'] });
		},

		onError: () => {
			alert('Erro ao criar usuário. Tente novamente.');
		},
	});
}
