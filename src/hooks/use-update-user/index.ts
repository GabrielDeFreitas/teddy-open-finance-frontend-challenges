import { useMutation, useQueryClient } from '@tanstack/react-query';
import type { UpdateUserDto } from '../../service/api/types';
import { updateUser } from '../../service/api/api-client';
import { showToast } from '../../utils/show-toast';
import { useTranslation } from 'react-i18next';

export function useUpdateUser() {
	const queryClient = useQueryClient();
	const { t } = useTranslation();

	return useMutation({
		mutationFn: ({ id, data }: { id: string; data: UpdateUserDto }) =>
			updateUser(id, data),

		onSuccess: () => {
			showToast(t('toast.userUpdated'), 'success');
			queryClient.invalidateQueries({ queryKey: ['users'] });
		},

		onError: () => {
			showToast(t('toast.userUpdateError'), 'error');
		},
	});
}
