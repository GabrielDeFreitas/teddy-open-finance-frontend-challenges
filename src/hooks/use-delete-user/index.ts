import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteUser } from '../../service/api/api-client';
import { showToast } from '../../utils/show-toast';
import { useTranslation } from 'react-i18next';

export function useDeleteUser() {
	const queryClient = useQueryClient();
	const { t } = useTranslation();

	return useMutation({
		mutationFn: (id: string) => deleteUser(id),

		onSuccess: () => {
			showToast(t('toast.userDeleted'), 'success');
			queryClient.invalidateQueries({ queryKey: ['users'] });
		},

		onError: () => {
			showToast(t('toast.userDeleteError'), 'error');
		},
	});
}
