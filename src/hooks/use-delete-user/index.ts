import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteUser } from '../../service/api/api-client';

export function useDeleteUser() {
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: (id: string) => deleteUser(id),

		onSuccess: () => {
			alert('Usuário deletado com sucesso!');
			queryClient.invalidateQueries({ queryKey: ['users'] });
		},

		onError: () => {
			alert('Erro ao deletar usuário. Tente novamente.');
		},
	});
}
