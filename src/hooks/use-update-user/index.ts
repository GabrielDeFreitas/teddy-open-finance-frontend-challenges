import { useMutation, useQueryClient } from '@tanstack/react-query';
import type { UpdateUserDto } from '../../service/api/types';
import { updateUser } from '../../service/api/api-client';

export function useUpdateUser() {
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: ({ id, data }: { id: string; data: UpdateUserDto }) =>
			updateUser(id, data),

		onSuccess: () => {
			alert('Usuário atualizado com sucesso!');
			queryClient.invalidateQueries({ queryKey: ['users'] });
		},

		onError: () => {
			alert('Erro ao atualizar usuário. Tente novamente.');
		},
	});
}
